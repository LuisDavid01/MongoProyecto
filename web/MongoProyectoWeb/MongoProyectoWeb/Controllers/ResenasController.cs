using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using MongoProyectoWeb.Models;
using System.Net.Http;
using System.Net.Http.Json;

namespace MongoProyectoWeb.Controllers
{
    public class ResenasController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public ResenasController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        // Acción para obtener un local con sus reseñas
        [HttpGet]
        public IActionResult VerResenasPorLocal(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Locales/" + id + "/Resenas";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<LocalConResenasModel>().Result;
                    return View(result); 
                                        
                }
                return View(null);
            }
        }

        public IActionResult CrearResena(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                // Obtener la lista de usuarios desde la API
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios/0";
                var responseUsuarios = http.GetAsync(url).Result;

                if (responseUsuarios.IsSuccessStatusCode)
                {
                    // Obtener todos los usuarios desde la API
                    var usuarios = responseUsuarios.Content.ReadFromJsonAsync<List<UsuariosModel>>().Result;

                    // Crear un SelectList con los usuarios para el dropdown
                    var usuarioSelectList = new SelectList(usuarios, "_id", "nombre");

                    // para que esté disponible en la vista
                    ViewBag.Usuarios = usuarioSelectList;
                }

                // Crear el modelo para la reseña
                var modelo = new ResenasModel
                {
                    IdLocal = id
                };

                return View(modelo);
            }
        }





        [HttpPost]
        public IActionResult CrearResena(ResenasModel model)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Resenas";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Locales");
                }
                return RedirectToAction("Index", "Locales");
            }
        }

        // Acción para ver una reseña en detalle
        public IActionResult VerResena(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Resenas/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<ResenasModel>().Result;
                    return View(result);
                }
                return View(null);
            }
        }

        // Acción para editar una reseña
        [HttpPost]
        public IActionResult EditarResena(ResenasModel model)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Resenas/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;
                return RedirectToAction("Index", "Locales");
            }
        }

        // Acción para eliminar una reseña
        [HttpPost]
        public IActionResult EliminarResena(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Resenas/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Locales");

            }
        }
    }
}
