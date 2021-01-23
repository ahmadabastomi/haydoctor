import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { colors, fonts } from '../../../utils'

const FlatButton = ({ title, fontSize, action }) => {
    return (
        <Pressable onPress={action}>
            <Text style={styles.label(fontSize)}>{title != null ? title : 'Flatbutton'}</Text>
        </Pressable>
    )
}

export default FlatButton

const styles = StyleSheet.create({
    label: (fontSize) => ({
        fontSize: fontSize != null ? fontSize : 12,
        fontFamily: fonts.primary[400],
        color: colors.text.darkGrey,
        textDecorationLine: 'underline'
    })
})
