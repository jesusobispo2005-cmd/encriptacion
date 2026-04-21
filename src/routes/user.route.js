import express from 'express';
import { registerController } from '../controllers/auth.controller.js';
import { loginController } from '../controllers/auth.controller.js';

const router = express.Router();

// Ruta para registro
router.post('/register', registerController);

// Ruta para login
router.post('/login', loginController);


export default router;