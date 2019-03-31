using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yleana.Exercise.Data.Implementations;
using Yleana.Exercise.Data.Models;

namespace Yleana.Exercise.Data.Repositories {
    public class JobRepository : RepositoryBase<Job> {
        public JobRepository (YleanaDb db) : base (db) {

        }
        public async Task<IEnumerable<string>> GetTitles () {
            return await Task.Run (() => Db.Job.Select (Job => Job.Title).AsEnumerable());
        }
    }
}