import { View, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { LinearBackground } from "../../components/auth/linear-background"
import { AuthHeader } from "../../components/auth/auth-header"
import { AuthBackground } from "../../components/auth/auth-background"
import { AuthTitle } from "../../components/auth/auth-title"
import { InputLabel } from "../../components/general/input-label"
import { CodeInputItem } from "../../components/auth/code-input-item"
import { Button } from "../../components/general/button"
import { AuthWarning } from "../../components/auth/auth-warning"
import { useState } from "react"

const Screen = () => {
    const [firstCode,  setFirstCode] = useState('')
    const [secondCode,  setSecondCode] = useState('')
    const [thirdCode,  setThirdCode] = useState('')
    const [fourthCode,  setFourthCode] = useState('')

    const handlePress = () => {
        console.log(firstCode)
        console.log(secondCode)
        console.log(thirdCode)
        console.log(fourthCode)
    }

    return(
        <SafeContainer>
            <LinearBackground>
                <AuthHeader />

                <AuthBackground>
                    <AuthTitle label="Mudar Senha" />

                    <View style={styles.labelArea}>
                        <InputLabel label="Digite o código" />
                    </View>
                    
                    <View style={styles.inputCodeArea}>
                        <CodeInputItem 
                            value={firstCode}
                            onChange={setFirstCode} 
                        />
                        <CodeInputItem 
                            value={secondCode}
                            onChange={setSecondCode} 
                        />
                        <CodeInputItem 
                            value={thirdCode}
                            onChange={setThirdCode} 
                        />
                        <CodeInputItem 
                            value={fourthCode}
                            onChange={setFourthCode}
                        />
                    </View>

                    <Button 
                        label="Mandar"
                        handlePress={handlePress}
                    />

                    <AuthWarning 
                        label="Reenviar código"
                        handlePress={() => alert('Reenviado')}
                    />
                </AuthBackground>
            </LinearBackground>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    labelArea: {
        marginTop: 15
    },
    inputCodeArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }
})

export default Screen