import { req } from "../libs/req"

export const verifyToken = async (token: string) => {
    try{
        const request = await req.get(
            "/token",
            {
                headers: {
                    'Authorization': token
                }
            }
        )

        return request.data
    }catch(error: any){
        if(error.response){
            return error.response.data
        }
    }
}

export const register = async (nome: string, email: string, senha: string) => {
    try{
        const request = await req.post(
            "/registrar",
            {
                nome: nome,
                email: email,
                senha: senha
            }
        )

        return request.data
    }catch(error: any){
        if(error.response){
            return error.response.data
        }
    }
}

export const login = async (email: string, senha: string) => {
    try{
        const request = await req.post(
            "/login",
            {
                email: email,
                senha: senha
            }
        )

        return request.data
    }catch(error: any){
        if(error.response){
            return error.response.data
        }
    }
}