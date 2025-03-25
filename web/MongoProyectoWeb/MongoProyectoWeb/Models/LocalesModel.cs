using System.Text.Json.Serialization;

namespace MongoProyectoWeb.Models
{
    public class LocalesModel
    {
        public int? _id { get; set; }
        public string? nombre { get; set; }
        public string? categoria { get; set; }
        public string? descripcion { get; set; }
    }
}
