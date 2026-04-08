import { req } from "../libs/req"

export const verifyToken = async (token: string) => {
    const request = await req.get(
        "/token",
        {
            headers: {
                'Authorization': token
            }
        }
    )

    return request.data
}

export const register = async (nome: string, email: string, senha: string) => {
    const request = await req.post(
        "/registrar",
        {
            nome: nome,
            email: email,
            senha: senha
        }
    )

    return request.data
}

export const login = async (email: string, senha: string) => {
    const request = await req.post(
        "/login",
        {
            email: email,
            senha: senha
        }
    )

    return request.data
}