import { View, ScrollView, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { UserPhoto } from "../../components/main/user-photo"
import { ProfileInfo } from "../../components/main/profile-info"
import { Line } from "../../components/main/line"
import { MainTitle } from "../../components/main/main-title"
import { ConfigInfo } from "../../components/main/config-info"

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

                    <View style={styles.lineArea}>
                        <Line gray />
                    </View>

                    <View style={styles.configArea}>
                        <MainTitle label="Configurações" />

                        <View>
                            <ConfigInfo 
                                icon="image"
                                iconColor="#4A4A4A"
                                label="Alterar Foto"
                                line
                                onPress={() => { }}
                            />

                            <ConfigInfo 
                                icon="person-circle"
                                iconColor="#4A4A4A"
                                label="Alterar Bio"
                                line
                                onPress={() => { }}
                            />

                            <ConfigInfo 
                                icon="lock-closed"
                                iconColor="#4A4A4A"
                                label="Alterar Senha"
                                line
                                onPress={() => { }}
                            />

                            <ConfigInfo 
                                icon="log-out"
                                iconColor="#FF0000"
                                label="Logout"
                                red
                                onPress={() => { }}
                            />
                        </View>
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
    },
    lineArea: {
        marginVertical: 25
    },
    configArea: {
        gap: 15
    }
})

export default Screen