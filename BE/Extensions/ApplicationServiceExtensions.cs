using BE.Data;
using BE.Interfaces;
using BE.Services;
using Microsoft.EntityFrameworkCore;

namespace BE.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITokenService, TokenService>();
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("Default"));
            });
            return services;
        }
    }
}
