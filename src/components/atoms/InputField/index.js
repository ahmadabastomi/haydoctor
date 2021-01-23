import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils';

const InputField = ({ label, type }) => {
    const [focus, setFocus] = useState(false);
    return (
        <View>
            <Text style={styles.label}>{label != null ? label : "TextField"}</Text>
            <TextInput
                style={styles.inputStyle(focus)}
                secureTextEntry={type == 'password' ? true : false}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    inputStyle: (focus) => ({
        borderWidth: 1,
        borderRadius: 10,
        borderColor: (focus) ? colors.accentColor2 : colors.accentColor3,
    }),
    label: {
        marginBottom: 6,
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.darkGrey
    }
})
