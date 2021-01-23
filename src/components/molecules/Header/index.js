import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { IconArrowback } from '../../../assets';
import { colors } from '../../../utils';

const Header = ({ title,actionBack }) => {
    return (
        <View style={styles.headerWrap}>
            <Pressable onPress={actionBack}>
                <IconArrowback />
            </Pressable>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerWrap: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        marginTop: 32,
        marginBottom: 40,
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 20,
        fontFamily: 'Nonito-SemiBold',
        color: colors.text.dark,
        textAlign: 'center',
        display: 'flex',
        flex: 1,
    }
})
