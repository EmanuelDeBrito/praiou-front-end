import { View, StyleSheet } from "react-native"

export const Line = () => {
    return(
        <View style={styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 2,
        backgroundColor: '#FFCD38'
    }
})