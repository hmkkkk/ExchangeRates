namespace ZadanieRekrutacyjneInsERT.Core.Dtos
{
    public class NBPExchangeRateTableResponseDto
    {
        public string Table { get; set; } = null!;
        public string No { get; set; } = null!;
        public string EffectiveDate { get; set; } = null!;
        public List<NBPExchangeRateDto> Rates { get; set; } = new List<NBPExchangeRateDto>();
    }
}
