import { registerService, loginService } from '../services/auth.service.js';

export async function registerController(req, res) {
    const result = await registerService(req.body);
    res.status(result.status).json(result.message);
}

export async function loginController(req, res) {
    const login=await loginService(req.body)
    res.status(login.status).json(login.message);
}