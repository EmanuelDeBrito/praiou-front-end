import { Stack } from "expo-router"
import { useFonts, Montserrat_300Light_Italic } from "@expo-google-fonts/montserrat"

const RootLayout = () => {
    const [fontLoaded] = useFonts({
        'Montserrat-Light': Montserrat_300Light_Italic
    })

    if(!fontLoaded){
        return null
    }

    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(auth)" />
        </Stack>
    )
}

export default RootLayout