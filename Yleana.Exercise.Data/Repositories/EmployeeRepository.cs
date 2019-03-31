using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yleana.Exercise.Data.Implementations;
using Yleana.Exercise.Data.Models;

namespace Yleana.Exercise.Data.Repositories {
    public class EmployeeRepository : RepositoryBase<Employee> {
        public EmployeeRepository (YleanaDb db) : base (db) { }

        public async Task<IEnumerable<string>> GetEmployeeNames (int jobId) {
            return await Task.Run (() => Db.Job.Where (job => job.Id == jobId).Select (j => j.Employees.Select (p => p.Name)).FirstOrDefault());
        }
    }
}