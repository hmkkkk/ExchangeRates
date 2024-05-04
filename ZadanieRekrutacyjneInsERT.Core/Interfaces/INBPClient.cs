using ZadanieRekrutacyjneInsERT.Core.Dtos;

namespace ZadanieRekrutacyjneInsERT.Server.Clients
{
    public interface INBPClient
    {
        Task<IEnumerable<NBPExchangeRateDto>> GetExchangeRatesAsync();
    }
}
