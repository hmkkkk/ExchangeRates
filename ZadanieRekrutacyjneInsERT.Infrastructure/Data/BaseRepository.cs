using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using ZadanieRekrutacyjneInsERT.Core.Entities;
using ZadanieRekrutacyjneInsERT.Core.Interfaces;

namespace ZadanieRekrutacyjneInsERT.Infrastructure.Data
{
    public class BaseRepository<TEntity, TKey> : IBaseRepository<TEntity, TKey> where TEntity : BaseEntity<TKey>
    {
        private readonly DataContext _context;

        public BaseRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(TEntity entity)
        {
            _context.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entity)
        {
            _context.Set<TEntity>().AddRange(entity);
        }

        public async Task<bool> CommitAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            return await _context.Set<TEntity>().ToListAsync();
        }

        public async Task<List<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> func)
        {
            return await _context.Set<TEntity>().Where(func).ToListAsync();
        }
    }
}
