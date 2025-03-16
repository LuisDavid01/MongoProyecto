using System.Text.Json.Serialization;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class CategoriasModel
    {
        public int? _id {  get; set; }
        [JsonPropertyName("Nombre")]
        public string? Nombre { get; set; }
        [JsonPropertyName("Descripcion")]
        public string? Descripcion { get; set; }
        [JsonPropertyName("Ejemplos")]
        public List<string> Ejemplos { get; set; } = [];
    }
}
