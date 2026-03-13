import { Stack } from "expo-router"
import { useFonts, Montserrat_300Light_Italic } from "@expo-google-fonts/montserrat"
import { RobotoMono_400Regular } from "@expo-google-fonts/roboto-mono"

const RootLayout = () => {
    const [fontLoaded] = useFonts({
        'Montserrat-Light': Montserrat_300Light_Italic,
        'Roboto-Regular': RobotoMono_400Regular
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