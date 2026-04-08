import { View, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const MainContainer = ({ children }: Props) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    }
})