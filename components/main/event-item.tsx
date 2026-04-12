import { View, Pressable, Image, StyleSheet } from "react-native"
import { InfoItem } from "./info-item"

type Props = {
    idEvento: number,
    nome: string,
    endereco: string,
    tipoEvento: string,
    data: number[],
    horario: number[]
}

export const EventItem = ({ idEvento, nome, endereco, tipoEvento, data, horario }: Props) => {
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
                subtitle={nome}
            />

            <InfoItem 
                title="Local"
                subtitle={endereco}
            />

            <InfoItem 
                title="Data"
                subtitle={"25/02"}
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