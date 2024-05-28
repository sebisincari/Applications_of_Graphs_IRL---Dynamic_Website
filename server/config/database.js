const mongoose = require('mongoose');
const connect_db = async () =>{
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected: ${conn.connection.host}')

    }catch(error){
        console.error('Error: ${error.message}');
    }

}

module.exports = connect_db;