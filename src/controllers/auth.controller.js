import { registerService } from '../services/auth.service.js';
import { dbConfig } from '../config/db.config.js';

export async function registerController(req, res) {
  const dbStatus = await dbConfig();
  if (!dbStatus.success) {
    return res.status(500).json(dbStatus);
  }
  const result = await registerService(req.body);
  res.json(result);
}

export async function loginController(req, res) {
  const dbStatus = await dbConfig();
  if (!dbStatus.success) {
    return res.status(500).json(dbStatus);
  }
  res.json({ message: 'Ruta de login funcionando' });
}