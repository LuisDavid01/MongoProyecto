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
 async getLocalesWithResenas(id) {
  id = parseInt(id)

       // Obtener el local con sus reseñas utilizando agregación
      const local =  await Locales.aggregate([
        {
          $match: { _id: id } // Filtrar el local por el ID recibido
        },
        {
          $lookup: {
            from: "Resenas", // Nombre de la colección de reseñas
            localField: "_id", // Campo de la colección Locales para comparar
            foreignField: "id_local", // Campo de la colección Resenas que hace referencia al local
            as: "Resenas" // Alias donde se guardarán las reseñas asociadas
          }
        }
      ]);

	return local;
	}

  async getLocalWithReservas(id) {
      id = parseInt(id)
        // Obtener el local con sus reservas utilizando agregación
        const local =  await Locales.aggregate([
          {
            $match: { _id: id } 
          },
          {
            $lookup: {
              from: "Reservas", 
              localField: "_id", 
              foreignField: "id_local", 
              as: "Reservas" 
            }
          }
        ]);
    
       return  local
    }
  
}
 
module.exports = new LocalesService();
