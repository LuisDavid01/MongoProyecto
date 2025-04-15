using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class LocalConResenasModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("id_usuario")]
        public int IdUsuario { get; set; }

        [JsonPropertyName("id_local")]
        public int IdLocal { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }

        [JsonPropertyName("calificacion")]
        public int Calificacion { get; set; }

        [JsonPropertyName("comentario")]
        public string Comentario { get; set; }
        public List<ResenasModel> Resenas { get; set; }
    }
}
