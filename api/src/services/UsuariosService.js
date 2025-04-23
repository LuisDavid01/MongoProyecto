/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Usuarios = require('../models/UsuariosModel');
const bcrypt = require('bcryptjs'); 
const dotenv = require('dotenv')
class UsuariosService {
  async createUsuarios(data) {
		
    const Usuario = new Usuarios(data);
    Usuario.contraseña = await this.hashPassword(Usuario.contraseña);
    await Usuario.save();
    return Usuario;
  }
 
  async getUsuarios(id) {
    if(id != 0 ){
      return await Usuarios.findById(id);
    }
    return await Usuarios.find();
    
  }
 
  async updateUsuarios(id, data) {
		data.contraseña = await this.hashPassword(data.contraseña);
    return await Usuarios.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteUsuarios(id) {
    return await Usuarios.findByIdAndDelete(id);
  }

async hashPassword(password){
	dotenv.config();
	const salt = await bcrypt.genSalt(parseInt(process.env.salt));
	const hashedpassword = await bcrypt.hash(password, salt);
	return hashedpassword;

}


  
}

 
module.exports = new UsuariosService();
