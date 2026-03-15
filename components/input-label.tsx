import { Text, StyleSheet } from "react-native"

type Props = {
    label: string
}

export const InputLabel = ({ label }: Props) => {
    return(
        <Text style={styles.label}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    label: {
        color: '#4A4A4A',
        fontSize: 22,
        fontFamily: 'Roboto-Medium'
    }
})