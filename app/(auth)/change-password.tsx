import { SafeContainer } from "../../components/general/safe-container"
import { LinearBackground } from "../../components/auth/linear-background"
import { AuthHeader } from "../../components/auth/auth-header"
import { AuthBackground } from "../../components/auth/auth-background"
import { AuthTitle } from "../../components/auth/auth-title"
import { FormArea } from "../../components/general/form-area"
import { AuthInput } from "../../components/auth/auth-input"
import { Button } from "../../components/general/button"
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