import { Image, ImageSourcePropType, StyleSheet } from "react-native"

type Props = {
    path: ImageSourcePropType,
    top?: number,
    right?: number,
    bottom?: number,
    left?: number
}

export const AuthIcon = ({ path, top, right, bottom, left }: Props) => {
    return(
        <Image 
            style={[styles.icon, { top, right, bottom, left }]}
            source={path}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        width: 55,
        height: 55
    }
})