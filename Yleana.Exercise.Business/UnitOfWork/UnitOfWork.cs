using System.IO;
using Yleana.Exercise.Data;
using Yleana.Exercise.Data.Models;
using Yleana.Exercise.Data.Repositories;

namespace Yleana.Exercise.Business.UnitOfWork {
    public class UnitOfWork : IUnitOfWork {
        public UnitOfWork () {
            if (Db == null)
                Db = new YleanaDb ();

        }
        private YleanaDb db;

        public YleanaDb Db {
            get {
                if (db == null) {
                    DbInitializer dbInit = new DbInitializer ();
                    db = dbInit.Db;
                    return db;

                } else {
                    lock (db) {
                        return db;
                    }
                }
            }
            set { value = db; }
        }

        private EmployeeRepository employeeRepository;
        public EmployeeRepository EmployeeRepository {
            get {

                if (employeeRepository == null) {
                    employeeRepository = new EmployeeRepository (db);
                    return employeeRepository;
                } else {
                    lock (employeeRepository) {
                        return employeeRepository;
                    }
                }
            }
        }

        private JobRepository jobRepository;
        public JobRepository JobRepository {
            get {
                if (jobRepository == null) {
                    jobRepository = new JobRepository (db);
                    return jobRepository;
                } else {
                    lock (jobRepository) {

                        return jobRepository;
                    }
                }
            }
        }
    }
}