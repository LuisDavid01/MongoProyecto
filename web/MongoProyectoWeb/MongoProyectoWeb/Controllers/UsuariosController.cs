using System.Net.Http;
using System.Net.Http.Json;
using System.Reflection;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class UsuariosController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;
        public UsuariosController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }
        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<UsuariosModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearUsuario()
        {
            return View();
        }


        [HttpPost]
        public IActionResult CrearUsuario(UsuariosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios";
                var response = http.PostAsJsonAsync(url, model).Result; ;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Usuarios");
                }
                return RedirectToAction("Index", "Usuarios");

            }
        }

        public IActionResult VerUsuario(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<UsuariosModel>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        [HttpPost]
        public IActionResult EditarUsuario(UsuariosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;
                
                return RedirectToAction("Index", "Usuarios");

            }
        }


        [HttpPost]
        public IActionResult EliminarUsuario(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Usuarios/"+ id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Usuarios");

            }
        }


    }
}
