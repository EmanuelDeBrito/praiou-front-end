import { Text, StyleSheet } from "react-native"

type Props = {
    label: string
}

export const MainSubtitle = ({ label }: Props) => {
    return(
        <Text style={styles.subtitle}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        marginBottom: 10,
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: 'Roboto-Regular'
    }
})