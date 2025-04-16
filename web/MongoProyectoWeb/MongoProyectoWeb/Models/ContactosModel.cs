using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class ContactosModel
    {
        public int? _id {  get; set; }
        public string telefono { get; set; }
        public string correo_electronico { get; set; }
        public List<ContactosModel> redes_sociales { get; set; }
    }

}