import { Image, StyleSheet } from "react-native"

export const Logo = () => {
    return(
        <Image 
            style={styles.logo}
            source={require('../assets/logo.png')}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    logo: {

    }
})