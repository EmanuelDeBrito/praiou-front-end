import { View, StyleSheet } from "react-native"
import { Logo } from "./logo"
import { AuthIcon } from "./auth-icon"
import { iconsArray } from "../utils/icons-map"

export const AuthHeader = () => {
    return(
        <View style={styles.container}>
            <Logo />
            <AuthIcon 
                path={iconsArray[1]} 
                top={5}
                left={-20}
            />
            <AuthIcon 
                path={iconsArray[0]} 
                bottom={-12}
                left={-12}
            />
            <AuthIcon 
                path={iconsArray[2]} 
                top={-12}
                right={-12}
            />
            <AuthIcon 
                path={iconsArray[4]} 
                bottom={-14}
                right={60}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%',
        overflow: 'hidden'
    }
})