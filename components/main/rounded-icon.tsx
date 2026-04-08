import { TouchableOpacity, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Ionicons } from "@expo/vector-icons"

type Props = {
    icon: keyof typeof Ionicons.glyphMap,
    big?: boolean,
    small?: boolean,
    handlePress: () => void
}

export const RoundedIcon = ({ icon, big, small, handlePress }: Props) => {
    return(
        <TouchableOpacity
            style={[
                styles.container,
                big && styles.big,
                small && styles.small
            ]}
            onPress={handlePress}
        >
            <LinearGradient
                style={styles.linearBackgroundArea}
                colors={['#FFDD67', '#FFCD38']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
            >
                <Ionicons 
                    name={icon}
                    size={big ? 24 : 20}
                    color={"#4A4A4A"}
                />
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        borderRadius: '50%'
    },
    big: {
        width: 40,
        height: 40,
    },
    small: {
        width: 30,
        height: 30
    },
    linearBackgroundArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})