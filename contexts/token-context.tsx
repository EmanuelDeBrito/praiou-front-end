import AsyncStorage from "@react-native-async-storage/async-storage"
import { verifyToken } from "../services/api"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type TokenContextType = {
    token: string,
    isLogged: boolean,
    isLoading: boolean,
    setNewToken: (newToken: string) => void,
    removeToken: () => void,
    setIsLogged: (newStatus: boolean) => void,
    setIsLoading: (newLoading: boolean) => void
}

const TokenContext = createContext<null | TokenContextType>(null)

type TokenProviderType = {
    children: ReactNode
}

export const TokenProvider = ({ children }: TokenProviderType) => {
    const [token, setToken] = useState("")
    const [isLogged, setIsLogged] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const setNewToken = async (newToken: string) => {
        await AsyncStorage.setItem("token", newToken)
        setToken(newToken)
    }

    const removeToken = async () => {
        await AsyncStorage.removeItem("token")
        setToken("")
    }

    // useEffect(() => {
    //     const checkToken = async () => {
    //         // Pegando o token armazenado
    //         const storedToken = await AsyncStorage.getItem("token")

    //         // Verificando se o token existe
    //         if(storedToken){
    //             // Verificando a validade do token
    //             const request = await verifyToken(storedToken)

    //             // Se for um token valido armazena no contexto e coloca o status de logado como TRUE
    //             if(request.success){
    //                 setToken(storedToken)
    //                 setIsLogged(true)
    //                 console.log("Token Válido")
    //             }else{
    //                 await removeToken()
    //                 console.log("Token Inválido")
    //             }
    //         }

    //         setIsLoading(false)
    //     }
    //     checkToken()
    // }, [])

    return(
        <TokenContext.Provider value={{ token, isLogged, isLoading, setNewToken, removeToken, setIsLogged, setIsLoading }}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext = (): TokenContextType => {
    const context = useContext(TokenContext)

    if(context === null){
        throw new Error("Context não carregado");
    }

    return context
}