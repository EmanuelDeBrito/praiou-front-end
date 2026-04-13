import { View, ScrollView, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { UserPhoto } from "../../components/main/user-photo"
import { ProfileInfo } from "../../components/main/profile-info"

const Screen = () => {
    return(
        <SafeContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MainContainer vertical>
                    <View style={styles.photoArea}>
                        <UserPhoto image="" />
                    </View>

                    <View style={styles.userInfoArea}>
                        <ProfileInfo
                            title="Nome"
                            label="Mark Grayson"
                        />

                        <ProfileInfo
                            title="Email"
                            label="invencivel@gmail.com"
                        />

                        <ProfileInfo
                            title="Bio"
                            label="Jogador profissional de Futvôlei, amo fazer qualquer esporte e curtir uma praia com os amigos"
                        />
                    </View>
                </MainContainer>
            </ScrollView>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    photoArea: {
        alignItems: 'center',
        marginVertical: 10
    },
    userInfoArea: {
        gap: 10
    }
})

export default Screen