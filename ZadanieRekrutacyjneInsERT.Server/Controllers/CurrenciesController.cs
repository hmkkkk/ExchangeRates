using AutoMapper;
using Microsoft.AspNetCore.Mvc;
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

        public CurrenciesController(INBPClient NBPClient, IMapper mapper)
        {
            _NBPClient = NBPClient;
            _mapper = mapper;
        }

        [HttpGet("exchangerates")]
        public async Task<ActionResult<IEnumerable<ExchangeRateDto>>> GetExchangeRates()
        {
            try
            {
                var exchangeRates = await _NBPClient.GetExchangeRatesAsync();

                var exchangeRatesDto = _mapper.Map<IEnumerable<ExchangeRateDto>>(exchangeRates);

                return Ok(exchangeRatesDto);
            }
            catch (HttpRequestException ex)
            {
                return StatusCode((int)ex.StatusCode, new ApiResponse((int)ex.StatusCode, ex.Message));
            }
        }
    }
}
