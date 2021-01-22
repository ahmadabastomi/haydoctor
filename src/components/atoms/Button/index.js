import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'

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
        width: 280,
        height: 45,
        backgroundColor: (type == 'secondary') ? 'white' : '#0BCAD4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }),
    textButton: (type) => ({
        color: (type == 'secondary') ? '#112340' : 'white',
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold'
    })
})
