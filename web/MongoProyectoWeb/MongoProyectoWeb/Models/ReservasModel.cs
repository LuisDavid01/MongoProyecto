using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class ReservasModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("id_usuario")]
        public int IdUsuario { get; set; }

        [JsonPropertyName("id_local")]
        public int IdLocal { get; set; }

        [JsonPropertyName("fecha")]
        public string fecha { get; set; }

        [JsonPropertyName("hora")]
        public string hora { get; set; }

        [JsonPropertyName("numero_personas")]
        public int numero_personas { get; set; }

        [JsonPropertyName("descripcion")]
        public string descripcion { get; set; }
    }
}
