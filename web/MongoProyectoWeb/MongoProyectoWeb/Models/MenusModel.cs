using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class MenusModel
    {
        public int? _id { get; set; }
        public int? id_local { get; set; }
        public string? nombre_comida {  get; set; }
        public int? precio { get; set; }
        public string tipo_comida { get; set; }

    }

}

