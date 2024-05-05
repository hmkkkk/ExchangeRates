using System;
using Microsoft.Azure.Functions.Worker;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;
using ZadanieRekrutacyjneInsERT.Infrastructure.Data;

namespace ZadanieRekrutacyjneInsERT.Functions
{
    public class GetExchangeRatesFromNBP
    {
        private readonly ILogger _logger;
        private readonly INBPClient _client;
        private readonly DataContext _context;

        public GetExchangeRatesFromNBP(ILoggerFactory loggerFactory, INBPClient client, DataContext context)
        {
            _logger = loggerFactory.CreateLogger<GetExchangeRatesFromNBP>();
            _client = client;
            _context = context;
        }

        [Function("GetExchangeRatesFromNBP")]
        public async Task Run([TimerTrigger("0 0 4 * * *"
#if DEBUG
            , RunOnStartup = true
#endif
            )] TimerInfo myTimer)
        {
            _logger.LogInformation($"[GetExchangeRatesFromNBP] function executed at: {DateTime.Now}");

            var exchangeRates = await _context.ExchangeRates.Where(x => x.Date.Date == DateTime.Today).ToListAsync();
            if (exchangeRates.Any()) return;

            var exchangeRatesDto = await _client.GetExchangeRatesAsync();

            exchangeRates = exchangeRatesDto.Select(x => new ExchangeRate
            {
                Code = x.Code,
                Currency = x.Currency,
                Mid = x.Mid
            }).ToList();

            _logger.LogInformation($"[GetExchangeRatesFromNBP] adding {exchangeRates.Count} exchange rates to database");

            _context.ExchangeRates.AddRange(exchangeRates);
            var result = await _context.SaveChangesAsync();

            if (result > 0)
                _logger.LogInformation($"[GetExchangeRatesFromNBP] {exchangeRates.Count} new exchange rates added successfully");
            else
                _logger.LogError($"[GetExchangeRatesFromNBP] failed to add new exchange rates");
        }
    }
}
