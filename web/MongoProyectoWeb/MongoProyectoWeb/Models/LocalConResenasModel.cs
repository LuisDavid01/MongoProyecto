using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class LocalConResenasModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("nombre")]
        public string Nombre { get; set; }
        [JsonPropertyName("id_categoria")]
        public int id_categoria { get; set; }

        [JsonPropertyName("descripcion")]
        public string Descripcion { get; set; }

        public List<ResenasModel> Resenas { get; set; }
    }
}
