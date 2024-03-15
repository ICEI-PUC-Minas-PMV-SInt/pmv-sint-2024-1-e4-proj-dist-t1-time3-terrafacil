using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace terrafacil_api.Models
{
    [Table("Insumos")]
    public class Insumo
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o tipo de insumo")]
        public string Tipo { get; set; }

        [Required(ErrorMessage = "Obrigatório informar a quantidade")]
        public string Quantidade { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o valor")]
        public int Valor { get; set; }

        public ICollection<Gasto> Gastos { get; set; }
    }
}
