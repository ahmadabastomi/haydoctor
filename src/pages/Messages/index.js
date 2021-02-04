import React from 'react'
import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { UserMessage } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
    return (
        <View style={styles.pages}>
            <StatusBar backgroundColor={colors.accentColor4} />
            <View style={styles.container}>
                <Text style={styles.title}>Messages</Text>
                <View style={styles.content}>
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                </View>
            </View>
        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.accentColor4,
        flex: 1,
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 16,
        paddingTop: 30
    },
    content: {
        marginTop: 16
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.dark
    }
})
