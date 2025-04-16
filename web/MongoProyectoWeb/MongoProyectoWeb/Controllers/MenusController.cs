using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;

namespace MongoProyectoWeb.Controllers
{
    public class MenusController : Controller
    {
        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;

        public MenusController(IConfiguration configuration, IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Index()
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Menus/0";
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<List<MenusModel>>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        public IActionResult CrearMenus()
        {
            return View();
        }


        [HttpPost]
        public IActionResult CrearMenus(MenusModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Menus";
                var response = http.PostAsJsonAsync(url, model).Result;
                if (response.IsSuccessStatusCode)
                {
                    return RedirectToAction("Index", "Menus");
                }
                return RedirectToAction("Index", "Menus");

            }
        }

        public IActionResult VerMenus(int id)
        {
            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Menus/" + id;
                var response = http.GetAsync(url).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = response.Content.ReadFromJsonAsync<MenusModel>().Result;

                    return View(result);
                }
                return View(null);

            }
        }

        [HttpPost]
        public IActionResult EditarMenus(MenusModel model)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Menus/" + model._id;
                var response = http.PutAsJsonAsync(url, model).Result;

                return RedirectToAction("Index", "Menus");

            }
        }


        [HttpPost]
        public IActionResult EliminarMenus(int id)
        {

            using (var http = _httpClient.CreateClient())
            {
                var url = _configuration.GetSection("Variables:urlWebApi").Value + "Menus/" + id;
                var response = http.DeleteAsync(url).Result;

                return RedirectToAction("Index", "Menus");

            }
        }
    }


}
