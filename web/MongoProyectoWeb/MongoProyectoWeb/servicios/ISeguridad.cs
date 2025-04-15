using System.Security.Cryptography.Xml;

namespace MongoProyectoWeb.servicios
{
    public interface ISeguridad
    {
        public string Encrypt(string input);

        public Task<bool> VerificarReCaptcha(string response, string secret);
    }
}
