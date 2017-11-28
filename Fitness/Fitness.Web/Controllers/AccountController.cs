using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Fitness.Web.Data;

namespace Fitness.Web.Controllers
{
  /// <inheritdoc />
  /// <summary>
  /// This controller cannot be hit. See 'Configure()' method in 'Startup.cs'
  /// </summary>
  [Route("[controller]/[action]")]
  public class AccountController : Controller
  {
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly ILogger _logger;

    public AccountController(SignInManager<ApplicationUser> signInManager, ILogger<AccountController> logger)
    {
      _signInManager = signInManager;
      _logger = logger;
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Logout()
    {
      await _signInManager.SignOutAsync();
      _logger.LogInformation("User logged out.");
      return RedirectToPage("/Index");
    }
  }
}
