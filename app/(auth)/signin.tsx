import { View, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/safe-container"
import { AuthBackground } from "../../components/auth-background"
import { LinearBackground } from "../../components/linear-background"
import { AuthHeader } from "../../components/auth-header"
import { AuthTitle } from "../../components/auth-title"

const Screen = () => {
    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />
                <AuthBackground>
                    <AuthTitle label="Login" />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    
})

export default Screen