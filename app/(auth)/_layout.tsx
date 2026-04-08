import { useTokenContext } from "../../contexts/token-context"
import { Stack, Redirect } from "expo-router"

const AuthLayout = () => {
    const { isLoading, isLogged } = useTokenContext()

    if(isLogged){
        return <Redirect href={"/(main)/home"} />
    }

    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="send-email" />
            <Stack.Screen name="send-code" />
            <Stack.Screen name="change-password" />
        </Stack>
    )
}

export default AuthLayout