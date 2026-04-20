import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function dbConfig() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conexión a MongoDB exitosa');
    return mongoose;
  } catch (error) {
    console.log('Error en conexión a MongoDB:', error);
    return null;
  }
}