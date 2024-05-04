using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Http;
using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Server.Clients;
using ZadanieRekrutacyjneInsERT.Server.Dtos;
using ZadanieRekrutacyjneInsERT.Server.Errors;
using ZadanieRekrutacyjneInsERT.Server.Helpers;

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
        public async Task<ActionResult<List<ExchangeRateDto>>> GetExchangeRates()
        {
            var exchangeRates = await _exchangeRateRepo.GetAllAsync(x => x.Date.Date == DateTime.Today);

            if (!exchangeRates.Any()) 
            {
                try
                {
                    exchangeRates = await GetExchangeRatesFromNBP();
                }
                catch (Exception ex)
                {
                    if (ex is HttpRequestException)
                    {
                        var httpRequestException = (HttpRequestException)ex;
                        return StatusCode((int)httpRequestException.StatusCode, new ApiResponse((int)httpRequestException.StatusCode, ex.Message));
                    }

                    return StatusCode((int)HttpStatusCode.BadRequest, new ApiResponse((int)HttpStatusCode.BadRequest, ex.Message));
                }
            }

            var yesterdaysExchangeRates = await _exchangeRateRepo.GetAllAsync(x => x.Date.Date == DateTime.Today.AddDays(-1));

            var exchangeRatesDto = _mapper.Map<List<ExchangeRateDto>>(exchangeRates);

            if (yesterdaysExchangeRates.Any()) exchangeRatesDto = exchangeRatesDto.GetRateDiference(yesterdaysExchangeRates);

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
