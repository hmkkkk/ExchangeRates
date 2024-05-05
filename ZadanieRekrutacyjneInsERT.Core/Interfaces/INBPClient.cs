using ZadanieRekrutacyjneInsERT.Core.Dtos;

namespace ZadanieRekrutacyjneInsERT.Core.Interfaces
{
    public interface INBPClient
    {
        Task<IEnumerable<NBPExchangeRateDto>> GetExchangeRatesAsync();
    }
}
