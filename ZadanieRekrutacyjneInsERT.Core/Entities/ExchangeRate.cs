using System.ComponentModel.DataAnnotations.Schema;

namespace ZadanieRekrutacyjneInsERT.Core.Entities
{
    public class ExchangeRate : BaseEntity<int>
    {
        public string Currency { get; set; } = null!;
        public string Code { get; set; } = null!;

        [Column(TypeName = "decimal(18, 6)")]
        public decimal Mid { get; set; }
        public DateTime Date { get; set; } = DateTime.Today;
    }
}
