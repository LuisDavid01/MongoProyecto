
using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class ContactoNegocioModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("id_local")]
        public int? Id_local { get; set; }

        [JsonPropertyName("email_negocio")]
        public string? email_negocio { get; set; }

        [JsonPropertyName("telefono_negocio")]
        public string? telefono_negocio { get; set; }

        [JsonPropertyName("disponibilidad")]
        public string? disponibilidad { get; set; }
    }
}
