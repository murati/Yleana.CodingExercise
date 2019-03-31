using System.Collections.Generic;

namespace Yleana.Exercise.Data.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public List<Employee> Employees { get; set; }
    }
}