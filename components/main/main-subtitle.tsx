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
        color: '#4A4A4A',
        fontSize: 25,
        fontFamily: 'Roboto-Regular'
    }
})