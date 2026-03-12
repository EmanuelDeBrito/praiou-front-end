import { Text, StyleSheet } from "react-native"
import { Logo } from "../components/logo"
import { LinearBackground } from "../components/linear-background"

const Screen = () => {
    return(
        <LinearBackground>
            <Logo />
            <Text style={styles.subtitle}>Seu app de esportes na praia</Text>
        </LinearBackground>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '4A4A4A',
        fontSize: 14,
        fontFamily: 'Montserrat-Light'
    }
})

export default Screen