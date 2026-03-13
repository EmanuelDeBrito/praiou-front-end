import { Stack } from "expo-router"

const AuthLayout = () => {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="signin" />
        </Stack>
    )
}

export default AuthLayout