import jwt from 'jsonwebtoken'
export function createToken(userInfo) {
    console.log("este es el servicio de token: ",userInfo)
    const token=jwt.sign(userInfo, '123123456')
    return token
}