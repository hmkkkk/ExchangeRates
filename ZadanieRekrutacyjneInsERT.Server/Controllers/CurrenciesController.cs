using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Server.Clients;
using ZadanieRekrutacyjneInsERT.Server.Dtos;
using ZadanieRekrutacyjneInsERT.Server.Errors;

namespace ZadanieRekrutacyjneInsERT.Server.Controllers
{
    [ApiController]
    [Route("api")]
    public class CurrenciesController : Controller
    {
        private readonly INBPClient _NBPClient;
        private readonly IMapper _mapper;
        private readonly IBaseRepository<ExchangeRate, int> _exchangeRateRepo;

        public CurrenciesController(INBPClient NBPClient, IMapper mapper, IBaseRepository<ExchangeRate, int> exchangeRateRepo)
        {
            _NBPClient = NBPClient;
            _mapper = mapper;
            _exchangeRateRepo = exchangeRateRepo;
        }

        [HttpGet("exchangerates")]
        public async Task<ActionResult<IEnumerable<ExchangeRateDto>>> GetExchangeRates()
        {
            var exchangeRates = await _exchangeRateRepo.GetAllAsync(x => x.Date.Date == DateTime.Today);

            if (exchangeRates.Count == 0) 
            {
                try
                {
                    exchangeRates = await GetExchangeRatesFromNBP();
                }
                catch (HttpRequestException ex)
                {
                    return StatusCode((int)ex.StatusCode, new ApiResponse((int)ex.StatusCode, ex.Message));
                }
            }

            var exchangeRatesDto = _mapper.Map<IEnumerable<ExchangeRateDto>>(exchangeRates);

            return Ok(exchangeRatesDto);
        }

        private async Task<List<ExchangeRate>> GetExchangeRatesFromNBP()
        {
            var exchangeRates = await _NBPClient.GetExchangeRatesAsync();

            var exchangeRatesEntities = _mapper.Map<List<ExchangeRate>>(exchangeRates);

            _exchangeRateRepo.AddRange(exchangeRatesEntities);

            await _exchangeRateRepo.CommitAsync();

            return exchangeRatesEntities;
        }
    }
}
