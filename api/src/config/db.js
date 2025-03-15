const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27025/eataway',{
        });
        console.log('Mongodb connected');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;