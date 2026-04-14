import { View, ScrollView, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { MainTitle } from "../../components/main/main-title"
import { RoundedIcon } from "../../components/main/rounded-icon"
import { PostItem } from "../../components/main/post-item"
import { useState } from "react"

const Screen = () => {
    const [posts, setPosts] = useState([])

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

                <ScrollView style={styles.postsList}>
                    <PostItem />
                    <PostItem />
                </ScrollView>
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    postsList: {
        marginTop: 20
    }
})

export default Screen