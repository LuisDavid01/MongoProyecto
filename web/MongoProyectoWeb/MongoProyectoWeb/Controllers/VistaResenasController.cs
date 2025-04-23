using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;
using System.Net.Http.Json;

namespace MongoProyectoWeb.Controllers
{
    public class VistaResenasController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public VistaResenasController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Index()
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "vista-resenas";
                var response = http.GetAsync(url).Result;

                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<VistaResenasModel>>().Result;
                    return View(result);
                }

                return View(null);
            }
        }

        [HttpPost]
        public IActionResult ActualizarVista()
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "actualizar-vista";
                var response = http.PostAsync(url, null).Result;

                // Redirigir de nuevo a Index para ver datos actualizados
                return RedirectToAction("Index", "VistaResenas");
            }
        }
    }
}
