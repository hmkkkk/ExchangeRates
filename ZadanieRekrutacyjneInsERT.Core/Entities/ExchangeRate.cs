using System.ComponentModel.DataAnnotations.Schema;

namespace ZadanieRekrutacyjneInsERT.Core.Entities
{
    public class ExchangeRate : BaseEntity<int>
    {
        [Column(TypeName = "nvarchar(50)")]
        public string Currency { get; set; } = null!;

        [Column(TypeName = "nvarchar(3)")]
        public string Code { get; set; } = null!;

        [Column(TypeName = "decimal(18, 6)")]
        public decimal Mid { get; set; }
        public DateTime Date { get; set; } = DateTime.Today;
    }
}
