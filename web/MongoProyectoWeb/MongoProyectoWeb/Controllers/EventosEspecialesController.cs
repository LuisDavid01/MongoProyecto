using System.Net.Http;
using System.Net.Http.Json;
using System.Reflection;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Configuration;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class EventosEspeciales : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;
        public EventosEspeciales(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }
        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "EventosEspeciales/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<EventosEspecialesModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearEventosEspeciales()
        {
            using (var http = _httpClient.CreateClient())
            {
                // Obtener la lista de usuarios desde la API
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Locales/0";
                var response = http.GetAsync(url).Result;

                if (response.IsSuccessStatusCode)
                {
                    // Obtener todos los locales desde la API
                    var usuarios = response.Content.ReadFromJsonAsync<List<LocalesModel>>().Result;

                    var localesSelectList = new SelectList(usuarios, "_id", "nombre");

                    ViewBag.Locales = localesSelectList;
                }

                return View();
            }
        }


        [HttpPost]
        public IActionResult CrearEventosEspeciales(EventosEspecialesModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "EventosEspeciales";
                var response = http.PostAsJsonAsync(url, model).Result; ;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "EventosEspeciales");
                }
                return RedirectToAction("Index", "EventosEspeciales");

            }
        }

        public IActionResult VerEventosEspeciales(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                // Obtener el evento especial por ID
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "EventosEspeciales/" + id;
                var responseEvento = http.GetAsync(url).Result;

                if (responseEvento.IsSuccessStatusCode)
                {
                    // Obtener los detalles del evento especial de manera sincrónica
                    var result = responseEvento.Content.ReadFromJsonAsync<EventosEspecialesModel>().Result;

                    // Obtener la lista de locales para que el usuario seleccione uno
                    var urlLocales = _configuration.GetSection("Variables:urlWebApi").Value + "Locales/0";
                    var responseLocales = http.GetAsync(urlLocales).Result;

                    if (responseLocales.IsSuccessStatusCode)
                    {
                        // Obtener todos los locales desde la API
                        var locales = responseLocales.Content.ReadFromJsonAsync<List<LocalesModel>>().Result;

                        // Crear el SelectList con los locales
                        var localesSelectList = new SelectList(locales, "_id", "nombre");

                        // Pasar el SelectList a la vista
                        ViewBag.Locales = localesSelectList;
                    }

                    // Pasar el modelo del evento a la vista
                    return View(result);
                }

                return View(null);
            }
        }


        [HttpPost]
        public IActionResult EditarEventosEspeciales(EventosEspecialesModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "EventosEspeciales/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;
                
                return RedirectToAction("Index", "EventosEspeciales");

            }
        }


        [HttpPost]
        public IActionResult EliminarEventosEspeciales(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "EventosEspeciales/"+ id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "EventosEspeciales");

            }
        }


    }
}
