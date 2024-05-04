namespace ZadanieRekrutacyjneInsERT.Core.Entities
{
    public class BaseEntity<T>
    {
        public T Id { get; set; } = default(T)!;
    }
}
