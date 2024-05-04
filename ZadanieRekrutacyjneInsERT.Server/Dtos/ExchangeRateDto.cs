namespace ZadanieRekrutacyjneInsERT.Server.Dtos
{
    public class ExchangeRateDto
    {
        public string Currency { get; set; } = null!;
        public string Code { get; set; } = null!;
        public decimal Mid { get; set; }
        public decimal Difference { get; set; }
    }
}
