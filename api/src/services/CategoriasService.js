/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Categorias = require('../models/CategoriasModel');
 
class CategoriasService {
  async createCategorias(data) {
    
    const Categoria = new Categorias(data);
     
    await Categoria.save();
    return Categoria;
  }
 
  async getCategorias(id) {
    if(id != 0 ){
      return await Categorias.findById(id);
    }
    return await Categorias.find();
    
  }
 
  async updateCategorias(id, data) {
    return await Categorias.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteCategorias(id) {
    return await Categorias.findByIdAndDelete(id);
  }

  
}
 
module.exports = new CategoriasService();