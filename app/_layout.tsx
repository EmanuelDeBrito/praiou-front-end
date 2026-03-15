import { Stack } from "expo-router"
import { useFonts, Montserrat_300Light_Italic, Montserrat_500Medium, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat"
import { RobotoMono_400Regular, RobotoMono_500Medium } from "@expo-google-fonts/roboto-mono"
import { IndieFlower_400Regular } from "@expo-google-fonts/indie-flower"

const RootLayout = () => {
    const [fontLoaded] = useFonts({
        'Indie-Regular': IndieFlower_400Regular,
        'Roboto-Regular': RobotoMono_400Regular,
        'Roboto-Medium': RobotoMono_500Medium,
        'Montserrat-Light': Montserrat_300Light_Italic,
        'Montserrat-Medium': Montserrat_500Medium,
        'Montserrat-Semibold': Montserrat_600SemiBold
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