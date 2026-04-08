import { SafeContainer } from "../../components/general/safe-container"
import { LinearBackground } from "../../components/auth/linear-background"
import { AuthHeader } from "../../components/auth/auth-header"
import { AuthBackground } from "../../components/auth/auth-background"
import { AuthTitle } from "../../components/auth/auth-title"
import { FormArea } from "../../components/general/form-area"
import { AuthInput } from "../../components/auth/auth-input"
import { Button } from "../../components/general/button"
import { AuthWarning } from "../../components/auth/auth-warning"
import { login } from "../../services/api"
import { useTokenContext } from "../../contexts/token-context"
import { router } from "expo-router"
import { useState } from "react"

const Screen = () => {
    const { setNewToken } = useTokenContext()

    const [email,  setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlePress = async () => {
        if(email && password){
            const response = await login(email, password)

            if(response.success !== undefined){
                await setNewToken(response.token)
                console.log("Login feito com sucesso")
                console.log("Token: " + response.token)
                router.replace("/(main)/home")
            }else{
                console.log("Credenciais inválidas")
            }
        }else{
            console.log("Preencha todos os campos")
        }
    }

    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />

                <AuthBackground>
                    <AuthTitle label="Login" />

                    <FormArea>
                        <AuthInput
                            label="Email"
                            placeholder="Digite o email"
                            value={email}
                            onChangeText={t => setEmail(t)}
                        />
                        <AuthInput
                            label="Senha"
                            placeholder="Digite a senha"
                            value={password}
                            forgotPassword
                            onChangeText={t => setPassword(t)}
                        />
                    </FormArea>

                    <Button 
                        label="Login"
                        handlePress={handlePress}
                    />

                    <AuthWarning 
                        label="Não tem conta? crie uma"
                        handlePress={() => router.push('/(auth)/signup')}
                    />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

export default Screen