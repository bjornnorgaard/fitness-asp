using System.Net.Http;
using System.Net.Http.Headers;
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
      return
    }
  }
}
