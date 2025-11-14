const mongoose = require("mongoose");
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.log("Error en conectar con Mongo: ", error);
  }
};


module.exports = { connectMongoDB };