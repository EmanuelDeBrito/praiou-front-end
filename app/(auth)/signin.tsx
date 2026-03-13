import { View, StyleSheet, Text } from "react-native"
import { SafeContainer } from "../../components/safe-container"
import { AuthBackground } from "../../components/auth-background"
import { LinearBackground } from "../../components/linear-background"
import { AuthHeader } from "../../components/auth-header"

const Screen = () => {
    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />
                <AuthBackground>
                    
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    
})

export default Screen