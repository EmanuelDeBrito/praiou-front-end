import { Image, StyleSheet } from "react-native"

type Props = {
    image: string
}

export const UserPhoto = ({ image }: Props) => {
    return(
        <Image
            style={styles.photo}
            source={require('../../assets/interface-images/invencivel.png')}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    photo: {
        width: 140,
        height: 140,
        borderRadius: '50%'
    }
})