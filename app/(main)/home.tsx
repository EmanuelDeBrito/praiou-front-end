import { View, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainHeader } from "../../components/main/main-header"
import { MainContainer } from "../../components/main/main-container"
import { MainSubtitle } from "../../components/main/main-subtitle"

const Screen = () => {
    return(
        <SafeContainer>
            <MainHeader 
                image=""
                name="Mark Grayson"
                points={1000}
            />

            <MainContainer>
                <View style={styles.categoryArea}>
                    <MainSubtitle label="Categorias" />
                </View>
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    categoryArea: {
        gap: 10,
        paddingVertical: 30,
    }
})

export default Screen