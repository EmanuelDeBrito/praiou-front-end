import { View, Text, Pressable, StyleSheet } from "react-native"
import { Line } from "./line"
import { RoundedIcon } from "./rounded-icon"

type Props = {
    label: string,
    bottomLine?: boolean,
    onPress: () => void
}

export const EventInfoItem = ({ label, bottomLine, onPress }: Props) => {
    return(
        <Pressable
            style={styles.container}
            onPress={onPress}
        >
            <Line />
            
            <View style={styles.eventInfo}>
                <Text style={styles.label}>{label}</Text>

                <RoundedIcon 
                    icon="arrow-forward"
                    handlePress={() => { }}
                />
            </View>

            {bottomLine && 
                <Line /> 
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    eventInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    label: {
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: 'Roboto-Medium'
    }
})