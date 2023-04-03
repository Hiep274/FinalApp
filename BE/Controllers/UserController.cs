using BE.Data;
using BE.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly DataContext _context;
        public UserController(DataContext context) { 
          _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            return _context.Users.ToList();
        }

        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<AppUser> GetUser(int id)
        {
            return  _context.Users.Find(id);
        }
    }
}
