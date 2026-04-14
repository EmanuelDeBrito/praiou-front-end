import { View, Text, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { MainTitle } from "../../components/main/main-title"
import { RoundedIcon } from "../../components/main/rounded-icon"

const Screen = () => {
    return(
        <SafeContainer>
            <MainContainer vertical>
                <View style={styles.headerArea}>
                    <MainTitle label="Comunidade" />
                    <RoundedIcon 
                        icon="add-sharp"
                        handlePress={() => {}}
                    />
                </View>

                
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default Screen