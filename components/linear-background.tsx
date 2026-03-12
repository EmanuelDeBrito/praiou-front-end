import { ReactNode } from "react"
import { StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

type Props = {
    children: ReactNode
}

export const LinearBackground = ({ children }: Props) => {
    return(
        <LinearGradient
            style={styles.container}
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
        justifyContent: 'center',
        alignItems: 'center'
    },
})