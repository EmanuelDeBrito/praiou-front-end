import { SafeContainer } from "../../components/safe-container"
import { LinearBackground } from "../../components/linear-background"
import { AuthBackground } from "../../components/auth-background"
import { AuthHeader } from "../../components/auth-header"
import { AuthTitle } from "../../components/auth-title"
import { FormArea } from "../../components/form-area"
import { AuthInput } from "../../components/auth-input"
import { Button } from "../../components/button"
import { AuthWarning } from "../../components/auth-warning"
import { useState } from "react"
import { router } from "expo-router"

const Screen = () => {
    const [email,  setEmail] = useState('')

    const handlePress = () => {
        console.log(email)
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