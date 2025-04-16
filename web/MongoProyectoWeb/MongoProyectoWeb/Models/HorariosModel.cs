using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class HorariosModel
    {
        [JsonPropertyName("_id")]
        public int? _id { get; set; }

        [JsonPropertyName("id_restaurante")]
        public int? IdRestaurante { get; set; }

        [JsonPropertyName("dia_semana")]
        public string? Dia_semana { get; set; }

        [JsonPropertyName("hora_apertura")]
        public string? Hora_apertura { get; set; }

        [JsonPropertyName("hora_cierre")]
        public string? Hora_cierre { get; set; }
        [JsonPropertyName("cierre_por_ocasion_especial")]
        public bool Cierre_por_ocasion_especial { get; set; }


    }
}
