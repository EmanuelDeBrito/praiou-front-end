import { View, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    vertical?: boolean,
    children: ReactNode
}

export const MainContainer = ({ vertical, children }: Props) => {
    return(
        <View style={vertical ? [styles.container, styles.vertical] : styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    vertical: {
        paddingVertical: 20
    }
})