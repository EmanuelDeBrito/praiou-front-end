import { StatusBar, SafeAreaView, StyleSheet } from "react-native"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const SafeContainer = ({ children }: Props) => {
    return(
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    }
})