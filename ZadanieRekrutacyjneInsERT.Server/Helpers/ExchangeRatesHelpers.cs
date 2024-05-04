using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Server.Dtos;

namespace ZadanieRekrutacyjneInsERT.Server.Helpers
{
    public static class ExchangeRatesHelpers
    {
        public static List<ExchangeRateDto> GetRateDiference(this List<ExchangeRateDto> currentRates, List<ExchangeRate> pastCurrentRates) 
        {
            foreach (var rate in currentRates)
            {
                var pastRate = pastCurrentRates.FirstOrDefault(x => x.Code == rate.Code);

                rate.Difference = pastRate == default 
                    ? 0 
                    : CalculateRateDifference(rate.Mid, pastRate.Mid); 
            }

            return currentRates;
        }

        public static decimal CalculateRateDifference(decimal current, decimal past)
        {
            if (past == 0) return 0;

            return Math.Round((current - past) / past * 100, 3);
        }
    }
}
