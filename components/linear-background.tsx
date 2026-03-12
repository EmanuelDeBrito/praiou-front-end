import { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

type Props = {
    children: ReactNode,
    contentCenter?: boolean
}

export const LinearBackground = ({ children, contentCenter }: Props) => {
    return(
        <LinearGradient
            style={contentCenter ? styles.centerContainer : styles.container}
            colors={['#FFDD67', '#FFCD38']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
        >
            {children}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})