using BE.Entities;

namespace BE.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}
