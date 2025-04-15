using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class EventosEspecialesModel
    {
        public int? _id { get; set; }
        public int? id_local { get; set; }
        public string? nombre_evento { get; set; }
        public string? descripcion { get; set; }
        public string? fecha { get; set; }
        public string? hora { get; set; }
    }
}

