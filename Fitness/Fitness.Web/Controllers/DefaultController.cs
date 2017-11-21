using Microsoft.AspNetCore.Mvc;

namespace Fitness.Web.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class DefaultController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Controller works!");
        }
    }
}
