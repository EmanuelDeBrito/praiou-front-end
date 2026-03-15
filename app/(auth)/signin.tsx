import { SafeContainer } from "../../components/safe-container"
import { LinearBackground } from "../../components/linear-background"
import { AuthBackground } from "../../components/auth-background"
import { AuthHeader } from "../../components/auth-header"
import { AuthTitle } from "../../components/auth-title"
import { FormArea } from "../../components/form-area"
import { AuthInput } from "../../components/auth-input"
import { useState } from "react"
import { Button } from "react-native"

const Screen = () => {
    const [email,  setEmail] = useState('Emanuel')
    const [password, setPassword] = useState('')

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
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

export default Screen