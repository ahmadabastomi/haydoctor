import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const UserProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.imageCircle} source={DummyUser1} />
            </View>
            <View style={styles.content}>
                <Text style={styles.nameStyle}>MyName Is User</Text>
                <Text style={styles.jobStyle}>Product Designer</Text>
            </View>
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    imageWrapper: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    imageCircle: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    content: {
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center'
    },
    nameStyle: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.dark
    },
    jobStyle: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.darkGrey
    }

})
