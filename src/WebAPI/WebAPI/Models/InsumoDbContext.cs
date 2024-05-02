using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class InsumoDbContext : DbContext
    {
        public InsumoDbContext(DbContextOptions<InsumoDbContext> options) : base(options)
        {
        }

        public DbSet<Insumo> Insumo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=WebAPI;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}
