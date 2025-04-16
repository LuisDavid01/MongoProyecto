using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class FotosModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("id_local")]
        public int? Id_local { get; set; }

        [JsonPropertyName("ruta_imagen")]
        public string? Ruta_imagen { get; set; }
    }
}
