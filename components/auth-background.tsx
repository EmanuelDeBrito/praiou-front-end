import { View, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const AuthBackground = ({ children }: Props) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 50,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    }
})