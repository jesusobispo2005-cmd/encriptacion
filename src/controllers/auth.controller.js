import { registerService, loginService, userInfoService } from '../services/auth.service.js';

export async function registerController(req, res) {
    const result = await registerService(req.body);
    res.status(result.status).json(result.message);
}

export async function loginController(req, res) {
    const login=await loginService(req.body)
    res.status(login.status).json(login.message);
}

export async function userInfoController(req, res){
    const userInfo=await userInfoService(req.body)
    res.status(userInfo.status).json({message:userInfo.message})
}