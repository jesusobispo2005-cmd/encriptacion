import { registerService } from '../services/auth.service.js';

export async function registerController(req, res) {
    const result = await registerService(req.body);
    res.status(result.status).json(result.message);
}