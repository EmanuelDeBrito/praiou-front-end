import { View, Text, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { BackButton } from "../../components/main/back-button"
import { useLocalSearchParams } from "expo-router"

const Screen = () => {
    const { name } = useLocalSearchParams()

    return(
        <SafeContainer>
            <MainContainer vertical>
                <BackButton />
            </MainContainer>
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