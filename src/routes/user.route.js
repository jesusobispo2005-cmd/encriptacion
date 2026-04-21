import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { registerController, loginController, userInfoController } from '../controllers/auth.controller.js';


const router = express.Router();

// Ruta para registro
router.post('/register', registerController);

// Ruta para login
router.post('/login', loginController);

router.post('/info',authMiddleware, userInfoController)


export default router;