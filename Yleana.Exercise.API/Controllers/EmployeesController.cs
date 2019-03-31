using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Yleana.Exercise.Business.UnitOfWork;
namespace Yleana.Exercise.API.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class EmployeesController : Controller {
        IUnitOfWork unitOfWork;
        public EmployeesController (IUnitOfWork unitOfWork) {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet, Route ("{jobId:int}")]
        public async Task<IActionResult> Get (int jobId) {
            return Ok (await Task.Run (() => unitOfWork.EmployeeRepository.GetEmployeeNames (jobId)));
        }
    }
}