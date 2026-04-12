import { View, Text, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { useLocalSearchParams } from "expo-router"

const Screen = () => {
    const { name } = useLocalSearchParams()

    return(
        <SafeContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Eventos de {name}</Text>
            </View>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '600'
    }
})

export default Screen