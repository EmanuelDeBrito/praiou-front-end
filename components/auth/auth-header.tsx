import { View, StyleSheet } from "react-native"
import { Logo } from "../general/logo"

export const AuthHeader = () => {
    return(
        <View style={styles.container}>
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%'
    }
})