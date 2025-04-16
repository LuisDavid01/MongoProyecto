using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class ContactoNegocioController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public ContactoNegocioController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "ContactoNegocio/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<ContactoNegocioModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearContactoNegocio()
        {
            return View();
        }


        [HttpPost]
        public IActionResult CrearContactoNegocio(ContactoNegocioModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "ContactoNegocio";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "ContactoNegocio");
                }
                return RedirectToAction("Index", "ContactoNegocio");

            }
        }

        public IActionResult VerContactoNegocio(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "ContactoNegocio/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<ContactoNegocioModel>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        [HttpPost]
        public IActionResult EditarContactoNegocio(ContactoNegocioModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "ContactoNegocio/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;

                return RedirectToAction("Index", "ContactoNegocio");

            }
        }


        [HttpPost]
        public IActionResult EliminarContactoNegocio(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "ContactoNegocio/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "ContactoNegocio");

            }
        }
    }
}
