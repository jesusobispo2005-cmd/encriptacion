import { dbConfig } from '../config/db.config.js';

export async function userModel(userData) {
  const config = await dbConfig();
  return { id: 1, email: userData.email, config, message: 'Modelo user conectado' };
}