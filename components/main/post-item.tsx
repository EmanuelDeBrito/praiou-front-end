import { View, Text, Image, StyleSheet } from "react-native"
import { UserInfo } from "./user-info"
import { Ionicons } from "@expo/vector-icons"

export const PostItem = () => {
    return(
        <View style={styles.container}>
            <UserInfo
                userImage=""
                userName="Mark Grayson"   
            />

            <View style={styles.bottomArea}>
                <Image
                    style={styles.postImage}
                    source={require('../../assets/interface-images/post.png')}
                    resizeMode="cover"
                />

                <Text style={styles.description}>A praia hoje estava deslumbrante, uma verdadeira paisagem de filme, além disso praticamos um futvôlei que nos rendeu boas risadas e esforço físico, #praiou</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    bottomArea: {
        gap: 5
    },
    postImage: {
        width: '100%',
        height: 250,
        borderRadius: 20
    },
    description: {
        paddingHorizontal: 5,
        color: '#4A4A4A',
        fontSize: 15,
        fontFamily: 'Indie-Regular'
    }
})