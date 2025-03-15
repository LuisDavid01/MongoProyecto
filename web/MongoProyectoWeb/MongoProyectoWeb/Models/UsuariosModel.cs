using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class UsuariosModel
    {
        public int? _id { get; set; }
        public string? nombre { get; set; }
        public string? correo { get; set; }

        public string? contraseña { get; set; } 
        public string? foto_de_perfil { get; set; }
    }
}
