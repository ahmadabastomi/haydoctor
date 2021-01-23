import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import {colors,fonts} from '../../../utils';

const Button = ({ type, title,onPress }) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.textButton(type)}>{(title != null) ? title : "Button"}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => ({
        width: '100%',
        height: 45,
        backgroundColor: (type == 'secondary') ? colors.button.secondary : colors.button.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }),
    textButton: (type) => ({
        color: (type == 'secondary') ? colors.text.dark : colors.text.white,
        fontSize: 18,
        fontFamily: fonts.primary[600],
    })
})
