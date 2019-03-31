using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using Yleana.Exercise.Data.Models;

namespace Yleana.Exercise.Data.Implementations {
    public abstract class RepositoryBase<T> : IRepository<T> where T : class {
        public YleanaDb Db { get; set; }

        public RepositoryBase (YleanaDb db) {
            this.Db = db;
        }

        public RepositoryBase (string path = "") {
            path = string.IsNullOrEmpty (path) ? "/Users/murti/Projects/yleana/Yleana.CodingExercise.git/Yleana.Exercise.Data/Models/data.json" : path;
            var yleanaData = File.ReadAllText (path);
            this.Db = JsonConvert.DeserializeObject<YleanaDb> (yleanaData);
        }
        public IEnumerable<T> GetAll () {
            throw new System.NotImplementedException ();
        }

        public T GetById (int id) {
            throw new System.NotImplementedException ();
        }
    }
}