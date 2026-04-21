export function authMiddleware(req, res, next) {
    console.log(req.headers.authorization)
    const token=req.headers.authorization
    if(!token)res.status(401).send("Token invalido")
    console.log("ahora si pasa al controlador")
    // res.send("esto no va a pasar del middleware")
    next();
}