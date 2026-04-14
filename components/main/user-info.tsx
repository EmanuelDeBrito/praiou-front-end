import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { Line } from "./line"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

type Props = {
    userImage: string,
    userName: string,
    line?: boolean
}

export const UserInfo = ({ userImage, userName, line }: Props) => {
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)

    const handleLike = () => {
        setDisliked(false)
        setLiked(!liked)
    }

    const handleDislike = () => {
        setLiked(false)
        setDisliked(!disliked)
    }

    return(
        <View style={styles.container}>
            <View style={styles.userArea}>
                <View style={styles.userAreaLeft}>
                    <Image
                        style={styles.userImage}
                        source={require('../../assets/interface-images/invencivel.png')}
                        resizeMode="cover"
                    />
                    <Text style={styles.userName}>{userName}</Text>
                </View>
            
                <View style={styles.userAreaRight}>
                    <TouchableOpacity onPress={handleLike}>
                        <Ionicons 
                            name={liked ? "thumbs-up" : "thumbs-up-outline"}
                            size={25}
                            color={"#4A4A4A"}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleDislike}>
                        <Ionicons 
                            name={disliked ? "thumbs-down" : "thumbs-down-outline"}
                            size={25}
                            color={"#4A4A4A"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {line &&
                <Line />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    userArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userAreaLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: '50%'
    },
    userName: {
        color: '#4A4A4A',
        fontSize: 17,
        fontFamily: 'Roboto-Regular'
    },
    userAreaRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
})