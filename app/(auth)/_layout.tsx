import { Stack } from "expo-router"

const AuthLayout = () => {
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