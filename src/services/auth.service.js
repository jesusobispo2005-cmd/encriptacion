import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt'
import { createToken } from './token.service.js';

const saltRounds = 10


export async function registerService(userData) {
    try {
        const hashedpass = await bcrypt.hash(userData.password, saltRounds);
        const user = await userModel();
        const nuevoUsuario = await new user({
            nombre: userData.nombre,
            apellido: userData.apellido,
            email: userData.email,
            password: hashedpass
        });

        nuevoUsuario.save();

        return {
            status: 201,
            message: "usuario guardado"
        }
    } catch (e) {
        console.log(e)
        return {
            status: 409,
            message: "usuario NO guardado"
        }
    }
}

export async function loginService(userData) {
    try {
        const { email, password } = userData;
        const user = await userModel();
        const usuario = await user.findOne({ email })
        // si el usuario no existe entonces retorna el 404
        if (!usuario) return { status: 401, message: "Usuario o clave incorrecto" }


        const compare = await bcrypt.compare(password, usuario.password)
        // bcrypt compare devuelve true o false si la clave es correcta o no, si no es correcta devolvemos en la api un 404 con un mensaje ambiguo
        if (!compare) return { status: 401, message: "Usuario o clave incorrecto" }
        const userInfo = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.email
        }
        return {
            status: 200,
            message: {
                usuario,
                token: createToken(userInfo)
            }

        };
    } catch (e) {
        return {
            status: 400,
            message: e.message
        }
    }
}

export async function userInfoService(userData) {
    const { email, password } = userData;
    const user = await userModel();
    const usuario = await user.findOne({ email })
    if (!usuario) return { status: 404, message: "Usuario no encontrado" }

    const userInfo = {
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.email
    }
    return {
        status:200,
        message: userInfo
    }
}