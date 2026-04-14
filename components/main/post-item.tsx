import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { UserInfo } from "./user-info"
import { Ionicons } from "@expo/vector-icons"

export const PostItem = () => {
    return(
        <View>
            <UserInfo
                userImage=""
                userName="Mark Grayson"   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})