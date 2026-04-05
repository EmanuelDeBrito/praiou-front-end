import { SafeAreaView, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const SafeContainer = ({ children }: Props) => {
    return(
        <>
            <SafeAreaView style={styles.statusBar} />

            <SafeAreaView style={styles.container}>
                <StatusBar
                    style="dark"
                    translucent={false}
                    backgroundColor="#FFF"
                />
                {children}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 0,
        backgroundColor: '#FFF'
    },
    container: {
        flex: 1
    }
})