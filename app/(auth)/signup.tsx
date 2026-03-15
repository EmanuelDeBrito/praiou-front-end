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
    const [name,  setName] = useState('')
    const [email,  setEmail] = useState('')
    const [password,  setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handlePress = () => {
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
    }

    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />

                <AuthBackground>
                    <AuthTitle label="Cadastrar" />

                    <FormArea>
                        <AuthInput
                            label="Nome"
                            placeholder="Digite o seu nome"
                            value={name}
                            onChangeText={t => setName(t)}
                        />
                        <AuthInput
                            label="Email"
                            placeholder="Digite o seu email"
                            value={email}
                            onChangeText={t => setEmail(t)}
                        />
                        <AuthInput
                            label="Senha"
                            placeholder="Digite sua senha"
                            value={password}
                            onChangeText={t => setPassword(t)}
                        />
                        <AuthInput
                            label="Confirmar Senha"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChangeText={t => setConfirmPassword(t)}
                        />
                    </FormArea>

                    <Button 
                        label="Cadastrar"
                        handlePress={handlePress}
                    />

                    <AuthWarning 
                        label="Já tem conta? faça login"
                        handlePress={() => router.push('/(auth)/signin')}
                    />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

export default Screen