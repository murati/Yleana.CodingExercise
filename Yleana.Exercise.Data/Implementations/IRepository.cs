using System.Collections.Generic;
namespace Yleana.Exercise.Data.Implementations
{
    public interface IRepository<T> where T : class
    {
        T GetById(int id);
        IEnumerable<T> GetAll();
    }
}