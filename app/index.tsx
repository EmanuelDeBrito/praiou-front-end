import { Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const Screen = () => {
    return(
        <LinearGradient
            style={styles.container}
            colors={['#FFDD67', '#FFCD38']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
        >
            <Text>Teste</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Screen