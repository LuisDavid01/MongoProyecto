using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using MongoProyectoWeb.Models;
using System.Net.Http;
using System.Net.Http.Json;

namespace MongoProyectoWeb.Controllers
{
    public class ReservasController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public ReservasController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        // Acción para obtener un local con sus reseñas
        [HttpGet]
        public IActionResult VerReservasPorLocal(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Locales/" + id + "/Reservas";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<LocalConReservasModel>().Result;
                    return View(result); 
                                        
                }
                return View(null);
            }
        }

        public IActionResult CrearReserva(int id)
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
                var modelo = new ReservasModel
                {
                    IdLocal = id
                };

                return View(modelo);
            }
        }

        [HttpPost]
        public IActionResult CrearReserva(ReservasModel model)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Reservas";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Locales");
                }
                return RedirectToAction("Index", "Locales");
            }
        }

        // Acción para ver una reseña en detalle
        public IActionResult VerReserva(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Reservas/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<ReservasModel>().Result;
                    return View(result);
                }
                return View(null);
            }
        }

        // Acción para editar una reseña
        [HttpPost]
        public IActionResult EditarReserva(ReservasModel model)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Reservas/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;
                return RedirectToAction("Index", "Locales");
            }
        }

        // Acción para eliminar una reseña
        [HttpPost]
        public IActionResult EliminarReserva(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Reservas/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Locales");

            }
        }
    }
}
