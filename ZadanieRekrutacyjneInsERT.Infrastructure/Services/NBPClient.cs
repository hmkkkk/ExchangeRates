using Newtonsoft.Json;
using RestSharp;
using ZadanieRekrutacyjneInsERT.Core.Dtos;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;

namespace ZadanieRekrutacyjneInsERT.Server.Clients
{
    public class NBPClient : INBPClient
    {
        private RestClient _client;
        private JsonSerializerSettings _serializerSettings;
        public NBPClient()
        {
            _client = new RestClient("http://api.nbp.pl/api");
            _serializerSettings = new JsonSerializerSettings
            {
                MissingMemberHandling = MissingMemberHandling.Ignore,
                NullValueHandling = NullValueHandling.Ignore
            };
        }

        public async Task<IEnumerable<NBPExchangeRateDto>> GetExchangeRatesAsync()
        {
            var request = new RestRequest("/exchangerates/tables/a", Method.Get);
            request.AddParameter("format", "json");

            var response = await _client.ExecuteAsync(request);

            if (!response.IsSuccessful || string.IsNullOrEmpty(response.Content)) 
                throw new HttpRequestException($"${response.StatusCode} [GetExchangeRatesAsync] Failed to get exchangeRates - {response.ErrorMessage}"
                    , null, response.StatusCode);

            try
            {
                var obj = JsonConvert.DeserializeObject<List<NBPExchangeRateTableResponseDto>>(response.Content, _serializerSettings);

                var exchangeRateTable = obj.FirstOrDefault();

                if (exchangeRateTable == default) throw new Exception();

                return exchangeRateTable.Rates;
            }
            catch (Exception)
            {
                throw new JsonSerializationException($"[GetExchangeRatesAsync] Could not deserialize response: {response.Content} to type NBPExchangeRateTableResponseDto");
            }
        }
    }
}
