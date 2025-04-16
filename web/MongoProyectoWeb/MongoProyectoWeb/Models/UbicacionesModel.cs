using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MongoProyectoWeb.Models
{
    public class UbicacionesModel : Controller
    {
        public int? _id { get; set; }
        public int? id_local { get; set; }
        public string? direccion { get; set; }
        public string? provincia { get; set; }

    }
}

