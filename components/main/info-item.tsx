import { View, Text, StyleSheet } from "react-native"

type Props = {
    title: string,
    subtitle: string
}

export const InfoItem = ({ title, subtitle }: Props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.infoTitle}>{title}</Text>
            <Text style={styles.infoSubtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 3
    },
    infoTitle: {
        color: "#4A4A4A",
        fontSize: 15,
        fontFamily: "Roboto-Medium"
    },
    infoSubtitle: {
        color: "#4A4A4A",
        fontSize: 13,
        fontFamily: "Indie-Regular"
    }
})