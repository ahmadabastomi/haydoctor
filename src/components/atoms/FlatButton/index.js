import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

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
        fontFamily: 'Nunito-Regular',
        color: '#7D8797',
        textDecorationLine: 'underline'
    })
})
