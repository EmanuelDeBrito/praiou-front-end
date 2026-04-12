import { Text, Image, TouchableOpacity, ImageURISource, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { router } from "expo-router"

type Props = {
    image: ImageURISource,
    label: string
}

export const CategoryItem = ({ image, label }: Props) => {
    const handlePress = () => {
        router.push(`category/${label}`)
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
                    style={styles.categoryImage}
                    source={image}
                    resizeMode="cover"
                />
                <Text style={styles.categoryName}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        marginRight: 15,
        overflow: 'hidden',
        borderRadius: 10,
    },
    linearBackgroundArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryImage: {
        width: 30,
        height: 30
    },
    categoryName: {
        color: "#4A4A4A",
        fontSize: 12,
        fontFamily: 'Indie-Regular'
    }
})