import { Text, StyleSheet } from "react-native"

type Props = {
    label: string,
    handlePress: () => void
}

export const AuthWarning = ({ label, handlePress }: Props) => {
    return(
        <Text
            style={styles.label}
            onPress={handlePress}
        >
            {label}
        </Text>
    )
}

const styles = StyleSheet.create({
    label: {
        marginTop: 20,
        fontSize: 18,
        fontFamily: 'Indie-Regular',
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationColor: '#4A4A4A'
    }
})