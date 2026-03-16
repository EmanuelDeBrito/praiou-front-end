import { View, Text, TextInput, StyleSheet } from "react-native"
import { InputLabel } from "./input-label"
import { router } from "expo-router"

type Props = {
    label: string,
    placeholder: string,
    value: string,
    forgotPassword?: boolean,
    onChangeText: (newValue: string) => void
}

export const AuthInput = ({ label, placeholder, value, forgotPassword, onChangeText }: Props) => {
    const handlePress = () => {
        router.push('/(auth)/send-email')
    }
    
    return(
        <View style={styles.container}>
            <InputLabel label={label} />
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.inputText}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
            {forgotPassword &&
                <Text 
                    style={styles.forgotPasswordText}
                    onPress={handlePress}
                >
                    Esqueci a senha
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: { },
    inputArea: {
        borderBottomColor: '#4A4A4A',
        borderBottomWidth: 2.2
    },
    inputText: {
        paddingVertical: 5,
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: 'Indie-Regular'
    },
    forgotPasswordText:  {
        marginTop: 7,
        color: '#4A4A4A',
        fontSize: 10,
        fontFamily: 'Montserrat-Semibold',
        textAlign: 'right',
        textDecorationLine: 'underline',
        textDecorationColor: '#4A4A4A'
    }
})