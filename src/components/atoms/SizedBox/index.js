import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SizedBox = ({ width, height }) => {
    return (
        <View style={styles.container(width, height)} />
    )
}

export default SizedBox

const styles = StyleSheet.create({
    container: (width, height) => ({
        width: width,
        height: height
    })
})
