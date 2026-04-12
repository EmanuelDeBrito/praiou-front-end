import { TouchableOpacity, Image, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

export const BackButton = () => {
    const handlePress = () => {
        router.back()
    }

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
        >
            <LinearGradient
                style={styles.linearBackgroundArea}
                colors={['#FFDD67', '#FFCD38']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Image 
                    style={styles.image}
                    source={require('../../assets/interface-images/arrow-back.png')}
                    resizeMode="cover"
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        overflow: 'hidden',
        borderRadius: '50%'
    },
    linearBackgroundArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20
    }
})