namespace ZadanieRekrutacyjneInsERT.Core.Dtos
{
    public class NBPExchangeRateDto
    {
        public string Currency { get; set; } = null!;
        public string Code { get; set; } = null!;
        public decimal Mid { get; set; }
    }
}
