import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type TokenContextType = {
    token: string,
    setNewToken: (newToken: string) => void,
    removeToken: () => void
}

const TokenContext = createContext<null | TokenContextType>(null)

type TokenProviderType = {
    children: ReactNode
}

export const TokenProvider = ({ children }: TokenProviderType) => {
    const [token, setToken] = useState("")

    const setNewToken = async (newToken: string) => {
        await AsyncStorage.setItem("token", newToken)
        setToken(newToken)
    }

    const removeToken = async () => {
        await AsyncStorage.removeItem("token")
        setToken("")
    }

    useEffect(() => {
        const takeToken = async () => {
            const storedToken = await AsyncStorage.getItem("token")

            if(storedToken){
                setToken(storedToken)
            }
        }
        takeToken()
    }, [])

    return(
        <TokenContext.Provider value={{ token, setNewToken, removeToken }}>
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