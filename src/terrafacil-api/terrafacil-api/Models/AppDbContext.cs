using Microsoft.EntityFrameworkCore;

namespace terrafacil_api.Models
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Insumo> Insumos { get; set; }

        public DbSet<Gasto> Gastos { get; set; }
    }
}
