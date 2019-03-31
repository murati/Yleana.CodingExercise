using Yleana.Exercise.Data.Models;
using Xunit;
using Yleana.Exercise.Data;

namespace Yleana.Exercise.APITest
{
    
    public class UnitTest
    {
        [Fact]
        public void DbInit()
        {
            DbInitializer db = new DbInitializer();
            Assert.NotEqual(0, db.Db.Job.Count);
            Assert.Equal(2,db.Db.Job.Count);
            Assert.NotEqual(0,db.Db.Job[0].Employees.Count);
            Assert.Equal("Paris",db.Db.Job[0].Employees[0].City);
            Assert.NotEqual("Chicago",db.Db.Job[0].Employees[0].City);
        }

        [Fact]
        public void Db(){
            YleanaDb db=new YleanaDb();

        }
    }
}
