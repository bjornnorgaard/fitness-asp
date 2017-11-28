using Microsoft.AspNetCore.Mvc;

namespace Fitness.Web.Controllers
{
    [Route("")]
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
