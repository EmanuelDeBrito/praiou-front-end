import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Line } from "./line"
import { Ionicons } from "@expo/vector-icons"

type Props = {
    icon: keyof typeof Ionicons.glyphMap,
    iconColor: string,
    label: string,
    red?: boolean,
    line?: boolean,
    onPress: () => void
}

export const ConfigInfo = ({ icon, iconColor, label, red, line, onPress }: Props) => {
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.configInfo}>
                <View style={styles.configLeft}>
                    <Ionicons 
                        name={icon}
                        size={35}
                        color={iconColor}
                    />

                    <Text style={red ? [styles.label, styles.redLabel] : styles.label}>{label}</Text>
                </View>

                <View style={styles.arrowArea}>
                    <Ionicons 
                        name={"chevron-forward"}
                        size={16}
                        color={"#FFFFFF"}
                    />
                </View>
            </View>

            {line &&
                <Line />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 15
    },
    configInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 3
    },
    configLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    label: {
        color: '#4A4A4A',
        fontSize: 18,
        fontFamily: 'Roboto-Regular'
    },
    redLabel: {
        color: '#FF0000'
    },
    arrowArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 22,
        height: 22,
        backgroundColor: '#4A4A4A',
        borderRadius: '50%'
    }
})