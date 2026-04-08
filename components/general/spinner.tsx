import { ActivityIndicator } from "react-native"
import { LinearBackground } from "../auth/linear-background"

export const Spinner = () => {
    return(
        <LinearBackground contentCenter>
            <ActivityIndicator
                size={"large"}
                color={"#FFF"}
            />
        </LinearBackground>
    )
}