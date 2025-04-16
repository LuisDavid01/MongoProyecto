using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Views
{
    public class ContactosModel
    {
        public int? _id {  get; set; }
        public string? telefono { get; set; }
        public string? correo_electronico {  get; set; }


    }
}
_id: { type: Number},
    telefono: { type: String},
    correo_electronico: { type: String},
    redes_sociales:
{
facebook: { type: String},
            twitter: { type: String},
            instagram: { type: String},
        }