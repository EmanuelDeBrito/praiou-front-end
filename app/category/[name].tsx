import { View, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { BackButton } from "../../components/main/back-button"
import { MainTitle } from "../../components/main/main-title"
import { useLocalSearchParams } from "expo-router"

const Screen = () => {
    const { name } = useLocalSearchParams()

    return(
        <SafeContainer>
            <MainContainer vertical>
                <BackButton />

                <View>
                    <MainTitle label={`Eventos de ${name}`} />
                </View>
            </MainContainer>
        </SafeContainer>
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