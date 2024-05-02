using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsumoController : ControllerBase
    {

        private readonly InsumoDbContext _insumoDbContext;

        public InsumoController(InsumoDbContext insumoDbContext)
        {
            _insumoDbContext = insumoDbContext;
        }

        [HttpGet]
        [Route("GetInsumo")]
        public async Task<IEnumerable<Insumo>> GetInsumos()
        {
            return await _insumoDbContext.Insumo.ToListAsync();
        }

        [HttpPost]
        [Route("AddInsumo")]
        public async Task<Insumo> AddInsumo(Insumo objInsumo)
        {
            _insumoDbContext.Insumo.Add(objInsumo);
            await _insumoDbContext.SaveChangesAsync();
            return objInsumo;
        }

        [HttpPatch]
        [Route("UpdateInsumo/{id}")]
        public async Task<Insumo> UpdateInsumo(Insumo objInsumo)
        {
            _insumoDbContext.Entry(objInsumo).State = EntityState.Modified;
            await _insumoDbContext.SaveChangesAsync();
            return objInsumo;
        }

        [HttpDelete]
        [Route("DeleteInsumo/{id}")]
        public bool DeleteInsumo(int id)
        {
            bool a = false;
            var insumo = _insumoDbContext.Insumo.Find(id);
            if (insumo != null)
            {
                a = true;
                _insumoDbContext.Entry(insumo).State = EntityState.Deleted;
                _insumoDbContext.SaveChanges();
            }
            else
            {
                a = false;
            }

            return a;

        }

    }
}
