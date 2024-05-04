using System.Linq.Expressions;

namespace ZadanieRekrutacyjneInsERT.Core.Interfaces
{
    public interface IBaseRepository<TEntity, in TKey>
    {
        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entity);
        Task<List<TEntity>> GetAllAsync();
        Task<List<TEntity>> GetAllAsync(Expression<Func<TEntity, bool>> func);
        Task<bool> CommitAsync();
    }
}
