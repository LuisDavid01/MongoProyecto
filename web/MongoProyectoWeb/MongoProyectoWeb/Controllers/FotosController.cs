using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class FotosController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public FotosController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Fotos/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<FotosModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearFoto()
        {
            return View();
        }


        [HttpPost]
        public IActionResult CrearFoto(FotosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Fotos";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Fotos");
                }
                return RedirectToAction("Index", "Fotos");

            }
        }

        public IActionResult VerFoto(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Fotos/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<FotosModel>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        [HttpPost]
        public IActionResult EditarFoto(FotosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Fotos/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;

                return RedirectToAction("Index", "Fotos");

            }
        }


        [HttpPost]
        public IActionResult EliminarFoto(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Fotos/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Fotos");

            }
        }
    }
}
