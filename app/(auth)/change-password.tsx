import { SafeContainer } from "../../components/safe-container"
import { LinearBackground } from "../../components/linear-background"
import { AuthBackground } from "../../components/auth-background"
import { AuthHeader } from "../../components/auth-header"
import { AuthTitle } from "../../components/auth-title"
import { FormArea } from "../../components/form-area"
import { AuthInput } from "../../components/auth-input"
import { Button } from "../../components/button"
import { useState } from "react"

const Screen = () => {
    const [newPassword,  setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const handlePress = () => {
        console.log(newPassword)
        console.log(confirmNewPassword)
    }

    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />

                <AuthBackground>
                    <AuthTitle label="Mudar Senha" />

                    <FormArea>
                        <AuthInput
                            label="Nova senha"
                            placeholder="Digite sua nova senha"
                            value={newPassword}
                            onChangeText={t => setNewPassword(t)}
                        />
                        <AuthInput
                            label="Confirmar nova senha"
                            placeholder="Confirme sua nova senha"
                            value={confirmNewPassword}
                            onChangeText={t => setConfirmNewPassword(t)}
                        />
                    </FormArea>

                    <Button 
                        label="Mudar"
                        handlePress={handlePress}
                    />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

export default Screen