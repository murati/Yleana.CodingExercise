using Yleana.Exercise.Data.Repositories;
using Yleana.Exercise.Data.Models;

namespace Yleana.Exercise.Business.UnitOfWork
{
    public interface IUnitOfWork
    {
        YleanaDb Db { get; set;}
        EmployeeRepository EmployeeRepository { get; }
        JobRepository JobRepository { get; }
    }
}