using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class HorariosController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public HorariosController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Horarios/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<HorariosModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearHorario()
        {
            return View();
        }


        [HttpPost]
        public IActionResult CrearHorario(HorariosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Horarios";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Horarios");
                }
                return RedirectToAction("Index", "Horarios");

            }
        }

        public IActionResult VerHorario(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Horarios/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<HorariosModel>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        [HttpPost]
        public IActionResult EditarHorario(HorariosModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Horarios/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;

                return RedirectToAction("Index", "Horarios");

            }
        }


        [HttpPost]
        public IActionResult EliminarHorario(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Horarios/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Horarios");

            }
        }
    }
}

