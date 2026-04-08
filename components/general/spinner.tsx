import { ActivityIndicator } from "react-native"
import { SafeContainer } from "./safe-container"
import { LinearBackground } from "../auth/linear-background"

export const Spinner = () => {
    return(
        <SafeContainer>
            <LinearBackground contentCenter>
                <ActivityIndicator
                    size={"large"}
                    color={"#FFF"}
                />
            </LinearBackground>
        </SafeContainer>
    )
}