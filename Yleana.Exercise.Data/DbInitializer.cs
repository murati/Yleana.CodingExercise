using System.IO;
using Newtonsoft.Json;
using Yleana.Exercise.Data.Models;

namespace Yleana.Exercise.Data
{
    public class DbInitializer
    {
        public YleanaDb Db { get; set; }
        public DbInitializer (string path = "") {
            path = string.IsNullOrEmpty (path) ? "/Users/murti/Projects/yleana/Yleana.CodingExercise.git/Yleana.Exercise.Data/Models/data.json" : path;
            var yleanaData = File.ReadAllText (path);
            this.Db = JsonConvert.DeserializeObject<YleanaDb> (yleanaData);
        }
    }
}