using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Models
{
    public class ContactosModel
    {
        public int? _id { get; set; }
        public string telefono { get; set; }
        public string correo_electronico { get; set; }
        public RedesSocialesModel redes_sociales { get; set; } = new RedesSocialesModel();
    }

    public class RedesSocialesModel
    {
        public string facebook { get; set; }
        public string twitter { get; set; }
        public string instagram { get; set; }
    }


}