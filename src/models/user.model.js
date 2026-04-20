import { getDbConfigTest } from '../config/db.config.js';

// Modelo simplificado: array en memoria para usuarios
let users = [];

export const createUser = (userData) => {
  // Simulación simple: agregar usuario al array
  users.push(userData);
  const configInfo = getDbConfigTest();
  return {
    success: true,
    message: 'Usuario creado en el modelo',
    user: userData,
    dbConfig: configInfo,
  };
};

export const findUserByEmail = (email) => {
  // Buscar usuario por email
  return users.find(user => user.email === email);
};