import { View, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const FormArea = ({ children }: Props) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 15,
        marginTop: 20,
        marginBottom: 25
    }
})