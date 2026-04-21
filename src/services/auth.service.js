import userModel from '../models/user.model.js';
import bcrypt from 'bcrypt'

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
    const { email, password } = userData;
    const user = await userModel();
    const usuario=await user.findOne({email})

    return {
        status: 200,
        message: usuario
    };
}