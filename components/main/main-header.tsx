import { View, Text, Image, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

type Props = {
    image: string,
    name: string,
    points: number
}

export const MainHeader = ({ image, name, points }: Props) => {
    return(
        <LinearGradient
            style={styles.container}
            colors={['#FFDD67', '#FFCD38']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
        >
            <View style={styles.headerArea}>
                <View style={styles.userInfoArea}>
                    <Image 
                        style={styles.userImage}
                        source={require('../../assets/interface-images/invencivel.png')}
                        resizeMode="cover"
                    />
                    <Text style={styles.userName}>{name}</Text>
                </View>

                <View style={styles.userPointsArea}>
                    <Ionicons 
                        name="medal-outline"
                        size={30}
                        color="#4A4A4A"
                    />
                    <Text style={styles.userPoints}>{points}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    userInfoArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    userName: {
        color: '#4A4A4A',
        fontSize: 17,
        fontFamily: 'Roboto-Regular'
    },
    userPointsArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userPoints: {
        color: '#4A4A4A',
        fontSize: 18,
    }
})