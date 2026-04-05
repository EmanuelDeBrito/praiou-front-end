import { Text, StyleSheet } from "react-native"
import { SafeContainer } from "../components/general/safe-container"
import { LinearBackground } from "../components/auth/linear-background"
import { Logo } from "../components/general/logo"
import { Loading } from "../components/general/loading"
import { sleep } from "../utils/sleep"
import { router } from "expo-router"
import { useEffect } from "react"

const Screen = () => {
    useEffect(() => {
        const changeScreen = async () => {
            await sleep(7000)
            router.replace('/(auth)/signin') 
        }
        
        changeScreen()
    }, [])

    return(
        <SafeContainer>
            <LinearBackground contentCenter>
                <Logo />
                <Text style={styles.subtitle}>Seu app de esportes na praia</Text>
                <Loading />
            </LinearBackground>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        marginTop: -16,
        marginBottom: 50,
        color: '4A4A4A',
        fontSize: 14,
        fontFamily: 'Montserrat-Light'
    }
})

export default Screen