using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace terrafacil_api.Models
{
    [Table("Gastos")]
    public class Gasto
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public DateTime Data { get; set; }

        [Required]
        [Column(TypeName ="decimal(18,2)")]
        public decimal Preco { get; set; }

        [Required]
        public int Quantia { get; set; }

        [Required]
        public int InsumoId { get; set; }

        public Insumo Insumo { get; set; }
    }
}
