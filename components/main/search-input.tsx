import { TextInput, StyleSheet } from "react-native"

type Props = {
    placeholder: string,
    value: string,
    onChangeText: (newValue: string) => void
}

export const SearchInput = ({ placeholder, value, onChangeText }: Props) => {
    return(
        <TextInput 
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={"#CCC"}
            value={value}
            onChangeText={t => onChangeText(t)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: '#4A4A4A',
        fontSize: 15,
        fontFamily: 'Montserrat-Medium',
        borderWidth: 2,
        borderColor: '#FFCD38',
        borderRadius: 30
    }
})