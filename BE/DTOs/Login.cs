using System.ComponentModel.DataAnnotations;

namespace BE.DTOs
{
    public class Login
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
