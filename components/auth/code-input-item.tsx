import { TextInput, StyleSheet } from "react-native"

type Props = {
    value: string,
    onChange: (newValue: string) => void
}

export const CodeInputItem = ({ value, onChange }: Props) => {
    return(
        <TextInput
            style={styles.container}
            value={value}
            onChangeText={onChange}
            caretHidden
        />
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        fontSize: 60,
        color: '#4A4A4A',
        fontFamily: 'Indie-Regular',
        borderWidth: 2,
        borderColor: '#FFCD38',
        borderRadius: 15
    }
})