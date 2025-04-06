/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Locales = require('../models/LocalesModel');
 
class LocalesService {
  async createLocales(data) {
    
    const Local = new Locales(data);
     
    await Local.save();
    return Local;
  }
 
  async getLocales(id) {
    if(id != 0 ){
      return await Locales.findById(id);
    }
    return await Locales.find();
    
  }
 
  async updateLocales(id, data) {
    return await Locales.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteLocales(id) {
    return await Locales.findByIdAndDelete(id);
  }

  
}
 
module.exports = new LocalesService();