import { Image } from "react-native"

export const Logo = () => {
    return(
        <Image
            source={require('../../assets/interface-images/logo.png')}
            resizeMode="cover"
        />
    )
}