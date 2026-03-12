import { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"
import { iconsArray } from "../utils/icons-map"

export const Loading = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const cycle = setInterval(() => {
            setIndex((prev) => (prev === 3 ? 0 : prev + 1))
        }, 1000)

        return () => clearInterval(cycle)
    }, [])

    return(
        <Image
            source={iconsArray[index]}
            resizeMode="cover"
        />
    )
}