using Microsoft.EntityFrameworkCore;
using ZadanieRekrutacyjneInsERT.Core.Entities;

namespace ZadanieRekrutacyjneInsERT.Infrastructure.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<ExchangeRate> ExchangeRates { get; set; }
    }
}
