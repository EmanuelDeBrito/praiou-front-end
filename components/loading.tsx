import { useEffect, useState } from "react"
import { Image, StyleSheet } from "react-native"
import { iconsArray } from "../utils/icons-map"

export const Loading = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const cycle = setInterval(() => {
            setIndex((prev) => (prev === 3 ? 0 : prev + 1))
        }, 500)

        return () => clearInterval(cycle)
    }, [])

    return(
        <Image
            style={styles.icon}
            source={iconsArray[index]}
            resizeMode="cover"
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 55,
        height: 55
    }
})