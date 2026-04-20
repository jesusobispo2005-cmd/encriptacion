import { createUser, findUserByEmail } from '../models/user.model.js';

export const registerUser = (userData) => {
  // Servicio simplificado para registro
  const result = createUser(userData);
  return result;
};

export const loginUser = (loginData) => {
  // Servicio simplificado para login
  const user = findUserByEmail(loginData.email);
  if (user && user.password === loginData.password) {
    return { success: true, message: 'Login exitoso', user };
  } else {
    return { success: false, message: 'Credenciales incorrectas' };
  }
};