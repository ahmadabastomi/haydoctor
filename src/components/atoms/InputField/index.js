import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputField = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>{label != null ? label : "TextField"}</Text>
            <TextInput style={styles.inputStyle} />
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E9E9E9'
    },
    label: {
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Nunito-Regular',
        color: '#7D8797'
    }
})
