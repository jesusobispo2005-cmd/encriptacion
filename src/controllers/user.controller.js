import { registerUser, loginUser } from '../services/user.service.js';

export const register = (req, res) => {
  // Controlador simplificado para registro
  const result = registerUser(req.body);
  res.json(result);
};

export const login = (req, res) => {
  // Controlador simplificado para login
  const result = loginUser(req.body);
  res.json(result);
};