import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

type Props = {
    label: string,
    handlePress: () => void
}

export const Button = ({ label, handlePress }: Props) => {
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
        >
            <LinearGradient
                style={styles.gradient}
                colors={['#FFDD67', '#FFCD38']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Text style={styles.buttonText}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        marginTop: 25
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: '#4A4A4A',
        fontSize: 35,
        fontFamily: 'Indie-Regular'
    }
})