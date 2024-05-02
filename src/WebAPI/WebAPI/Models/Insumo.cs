using System.ComponentModel.DataAnnotations;


namespace WebAPI.Models
{
    public class Insumo
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public double valor { get; set; }
    }
}
