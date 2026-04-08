import { SafeContainer } from "../../components/general/safe-container"
import { LinearBackground } from "../../components/auth/linear-background"
import { AuthHeader } from "../../components/auth/auth-header"
import { AuthBackground } from "../../components/auth/auth-background"
import { AuthTitle } from "../../components/auth/auth-title"
import { FormArea } from "../../components/general/form-area"
import { AuthInput } from "../../components/auth/auth-input"
import { Button } from "../../components/general/button"
import { AuthWarning } from "../../components/auth/auth-warning"
import { register } from "../../services/api"
import { router, Redirect } from "expo-router"
import { useState } from "react"

const Screen = () => {
    const [name,  setName] = useState('')
    const [email,  setEmail] = useState('')
    const [password,  setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handlePress = async () => {
        if(name && email && password && confirmPassword){
            if(password === confirmPassword){
                const response = await register(name, email, password)
                if(response.success){
                    console.log("Sucesso ao criar a conta")
                    return <Redirect href={"/(auth)/signin"} />
                }
            }else{
                console.log("Senhas Diferentes")
            }
        }else{
            console.log("Preencha todas as informações")
        }

        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
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