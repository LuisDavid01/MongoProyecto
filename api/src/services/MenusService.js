/*
    Aqui debe ir la logica de los diferentes requerimietnos funcionales
*/
const Menus = require('../models/MenusModel');
 
class MenusService {
  async createMenus(data) {
    
    const Local = new Menus(data);
     
    await Local.save();
    return Local;
  }
 
  async getMenus(id) {
    if(id != 0 ){
      return await Menus.findById(id);
    }
    return await Menus.find();
    
  }
 
  async updateMenus(id, data) {
    return await Menus.findByIdAndUpdate(id, data, { new: true });
  }
 
  async deleteMenus(id) {
    return await Menus.findByIdAndDelete(id);
  }

  
}
 
module.exports = new MenusService();