import { SafeContainer } from "../../components/general/safe-container"
import { LinearBackground } from "../../components/auth/linear-background"
import { AuthBackground } from "../../components/auth/auth-background"
import { AuthHeader } from "../../components/auth/auth-header"
import { AuthTitle } from "../../components/auth/auth-title"
import { FormArea } from "../../components/general/form-area"
import { AuthInput } from "../../components/auth/auth-input"
import { Button } from "../../components/general/button"
import { AuthWarning } from "../../components/auth/auth-warning"
import { useState } from "react"
import { router } from "expo-router"

const Screen = () => {
    const [email,  setEmail] = useState('')

    const handlePress = () => {
        console.log(email)
        router.push('/(auth)/send-code')
    }

    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />

                <AuthBackground>
                    <AuthTitle label="Mudar Senha" />

                    <FormArea>
                        <AuthInput
                            label="Seu email"
                            placeholder="Digite seu email"
                            value={email}
                            onChangeText={t => setEmail(t)}
                        />
                    </FormArea>

                    <Button 
                        label="Enviar"
                        handlePress={handlePress}
                    />

                    <AuthWarning 
                        label="Voltar para login"
                        handlePress={() => router.push('/(auth)/signin')}
                    />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

export default Screen