import { View, StyleSheet } from "react-native"

type Props = {
    gray?: boolean
}

export const Line = ({ gray }: Props) => {
    return(
        <View style={gray ? [styles.container, styles.gray] : styles.container} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 2,
        backgroundColor: '#FFCD38'
    },
    gray: {
        backgroundColor: '#4A4A4A'
    }
})