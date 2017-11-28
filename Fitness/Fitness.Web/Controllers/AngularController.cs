using Microsoft.AspNetCore.Mvc;

namespace Fitness.Web.Controllers
{
  [Route("")]
  [Produces("application/json")]
  public class AngularController : Controller
  {
    [HttpGet]
    public IActionResult Get()
    {
      return Ok($"{nameof(AngularController)} works!");
    }
  }
}
