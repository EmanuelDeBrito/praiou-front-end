import { View, Pressable, Image, StyleSheet } from "react-native"
import { InfoItem } from "./info-item"

export const EventItem = () => {
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
                subtitle="Futvôlei"
            />

            <InfoItem 
                title="Local"
                subtitle="Suarão"
            />

            <InfoItem 
                title="Data"
                subtitle="25/02"
            />

            <InfoItem 
                title="Horário"
                subtitle="14:00"
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