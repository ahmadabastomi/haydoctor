import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const CategoryCard = ({iconCategory,title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                {iconCategory}
            </View>
            <Text style={styles.textHeader}>Saya Butuh</Text>
            <Text style={styles.textSubHeader}>Dokter {title}</Text>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.accentColor5,
        height: 130,
        width: (Dimensions.get('window').width - 72) / 3,
        padding: 12,
        borderRadius: 10,
    },
    imageWrapper: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
    },
    imageCategory: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    textHeader: {
        marginTop: 28,
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.dark
    },
    textSubHeader: {
        fontFamily: fonts.primary[600],
        fontSize: 12,
        color: colors.text.dark
    }

})
