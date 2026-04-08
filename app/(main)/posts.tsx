import { View, Text, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"

const Screen = () => {
    return(
        <SafeContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Posts</Text>
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