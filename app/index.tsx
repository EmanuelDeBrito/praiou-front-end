import { SafeAreaView, Text, StyleSheet } from "react-native"
import { useEffect } from "react"
import { SafeContainer } from "../components/safe-container"
import { LinearBackground } from "../components/linear-background"
import { Logo } from "../components/logo"
import { Loading } from "../components/loading"
import { router } from "expo-router"

const Screen = () => {
    useEffect(() => {
        const changeScreen = setTimeout(() => {
            router.replace('/(auth)/signin')    
        }, 7000)
        changeScreen
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