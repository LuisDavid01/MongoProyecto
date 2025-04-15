using System.Reflection;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using MongoProyectoWeb.Models;
using MongoProyectoWeb.servicios;

namespace MongoProyectoWeb.Controllers
{
    public class AutenticacionController : Controller
    {

        private readonly IHttpClientFactory _httpClient;
        private readonly IConfiguration _configuration;
        private readonly ISeguridad _seguridad;

        public AutenticacionController(IHttpClientFactory httpClient, IConfiguration configuration, ISeguridad seguridad)
        {
            _httpClient = httpClient;
            _configuration = configuration;
            _seguridad = seguridad;
        }

        public  IActionResult login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> login(UsuariosModel model)
        {

            if (model.RecaptchaToken != null)
            {
                var privatekey = _configuration.GetSection("RecaptchaSettings:private_key").Value;

                var tokenVerificado = await _seguridad.VerificarReCaptcha(model.RecaptchaToken, privatekey);
                //si el resultado es true hace login
                if (tokenVerificado)
                {
                    model.contraseña = _seguridad.Encrypt(model.contraseña!);
                    using (var http = _httpClient.CreateClient())
                    {
                        var url = _configuration.GetSection("Variables:urlWebApi").Value + "Autenticacion/Login";
                        var response = http.PostAsJsonAsync(url, model).Result;

                        if (response.IsSuccessStatusCode)
                        {
                            var datosResult = response.Content.ReadFromJsonAsync<UsuariosModel>().Result;

                            if (datosResult != null)
                            {

                                   
                                    HttpContext.Session.SetString("_id", datosResult._id.ToString()!);
                                    HttpContext.Session.SetString("correo", datosResult.correo!.ToString()!);
                                    HttpContext.Session.SetString("nombre", datosResult.nombre!.ToString());
                                    HttpContext.Session.SetString("fotoPerfil", datosResult.foto_de_perfil!.ToString()!);
                                    return RedirectToAction("Index", "Home");
                                
                            }

                            TempData["Mensaje"] = "login exitoso";
                            return View(model);
                        }
                    }


                }
                else
                {
                    TempData["Mensaje"] = "No se pudo verificar el ReCaptcha correctamente, por favor, inténtalo de nuevo.";
                    return View();
                }

            }
            TempData["Mensaje"] = "Por favor, verifica el ReCaptcha para continuar.";
            return View();
        }

        public IActionResult registro() 
        { 
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> registro(UsuariosModel model)
        {
            {

                if (model.RecaptchaToken != null)
                {
                    var privatekey = _configuration.GetSection("RecaptchaSettings:private_key").Value;

                    var tokenVerificado = await _seguridad.VerificarReCaptcha(model.RecaptchaToken, privatekey);
                    //si el resultado es true hace login
                    if (tokenVerificado)
                    {
                        model.contraseña = _seguridad.Encrypt(model.contraseña!);

                        using (var http = _httpClient.CreateClient())
                        {
                            var url = _configuration.GetSection("Variables:urlWebApi").Value + "Autenticacion/Registro";
                            var response = http.PostAsJsonAsync(url, model).Result;

                            if (response.IsSuccessStatusCode)
                            {
                                var result = response.Content.ReadFromJsonAsync<UsuariosModel>().Result;

                                return RedirectToAction("Login", "Autenticacion");

                            }
                            else
                            {
                                TempData["Mensaje"] = "No se pudo completar el registro";
                                return View();
                            }
                        }

                    }
                    else
                    {
                        TempData["Mensaje"] = "No se pudo verificar el ReCaptcha correctamente, por favor, inténtalo de nuevo.";
                        return View();
                    }

                }
                TempData["Mensaje"] = "Por favor, verifica el ReCaptcha para continuar.";
                return View();
            }
        }
    }
}
