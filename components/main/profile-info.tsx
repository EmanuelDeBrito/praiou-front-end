import { View, Text, StyleSheet } from "react-native"

type Props = {
    title: string,
    label: string
}

export const ProfileInfo = ({ title, label }: Props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5
    },
    title: {
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: 'Roboto-Medium'
    },
    label: {
        color: '#4A4A4A',
        fontSize: 18,
        fontFamily: 'Indie-Regular'
    }
})