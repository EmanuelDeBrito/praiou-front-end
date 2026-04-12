import { Text, StyleSheet } from "react-native"

type Props = {
    label: string
}

export const MainTitle = ({ label }: Props) => {
    return(
        <Text style={styles.title}>{label}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#4A4A4A',
        fontSize: 30,
        fontFamily: 'Roboto-Regular'
    }
})