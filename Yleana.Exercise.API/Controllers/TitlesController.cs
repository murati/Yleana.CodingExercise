using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Yleana.Exercise.Business.UnitOfWork;

namespace Yleana.Exercise.API.Controllers {

    [Route ("api/[controller]")]
    [ApiController]
    public class TitlesController : ControllerBase {

        IUnitOfWork unitOfWork;
        public TitlesController (IUnitOfWork unitOfWork) {
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> Get () {
            return Ok (await Task.Run (() => unitOfWork.JobRepository.GetTitles ()));
        }
    }
}