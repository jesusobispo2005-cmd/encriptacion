import jwt from 'jsonwebtoken'
export function createToken(userInfo) {
    const token = jwt.sign(userInfo, process.env.tokenKey)
    return token
}

export function validateToken(token) {
    try {
        var decoded = jwt.verify(token, process.env.tokenKey);

        return decoded
    } catch (e) {
        return false
    }
}