import express from 'express';
import { registerController } from '../controllers/auth.controller.js';

const router = express.Router();

// Ruta para registro
router.post('/register', registerController);

// Ruta para login
router.post('/login', (req, res) => {
  res.json({ message: 'Ruta de login funcionando' });
});

export default router;