using Microsoft.AspNetCore.Mvc;

namespace Fitness.Web.Controllers
{
    [Route("api/[controller]")]
    [Route("api")]
    [Produces("application/json")]
    public class DefaultController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok($"{nameof(DefaultController)} works!");
        }
    }
}
