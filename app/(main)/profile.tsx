import { View, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { UserPhoto } from "../../components/main/user-photo"

const Screen = () => {
    return(
        <SafeContainer>
            <MainContainer vertical>
                <UserPhoto image="" />
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({

})

export default Screen