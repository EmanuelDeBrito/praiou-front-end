import { View, Pressable, Image, StyleSheet } from "react-native"
import { InfoItem } from "./info-item"
import { eventDateFormat } from "../../utils/date-format"

type Props = {
    id: number,
    name: string,
    address: string,
    type: string,
    date: number[],
    hour: number[]
}

export const EventItem = ({ id, name, address, type, date, hour }: Props) => {
    const formattedDate = eventDateFormat(date)

    return(
        <Pressable
            style={styles.container}
            onPress={() => { }}
        >
            <View style={styles.imageArea}>
                <Image
                    style={styles.sportImage}
                    source={require('../../assets/interface-images/volei.png')}
                    resizeMode="cover"
                />
            </View>

            <InfoItem 
                title="Título"
                subtitle={name}
            />

            <InfoItem 
                title="Local"
                subtitle={address}
            />

            <InfoItem 
                title="Data"
                subtitle={formattedDate}
            />

            <InfoItem 
                title="Horário"
                subtitle={"14:00"}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        backgroundColor: 'rgba(255, 205, 56, 0.7)',
        borderRadius: 20
    },
    imageArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#4A4A4A',
        borderRadius: '50%'
    },
    sportImage: {
        width: 30,
        height: 30
    }
})