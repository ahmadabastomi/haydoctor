import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { SizedBox } from '../../atoms'

const NewsItem = () => {
    return (
        <View style={styles.components}>
            <View style={styles.container}>
                <View style={styles.contentTextNews}>
                    <Text style={styles.textNews}>Is it safe to stay at home during corona virus?</Text>
                    <Text style={styles.textDateNews}>Today</Text>
                </View>
                <View>
                    <Image style={styles.imageNews} source={DummyNews1} />
                </View>
            </View>
            <SizedBox height={12} />
            <View style={styles.divider} />
        </View>
    )
}

export default NewsItem

const styles = StyleSheet.create({
    components: {
        marginBottom: 16
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentTextNews: {
        flexDirection: 'column'
    },
    imageNews: {
        width: 80,
        height: 60,
        borderRadius: 10
    },
    textNews: {
        width: Dimensions.get('window').width - 192,
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.dark
    },
    textDateNews: {
        marginTop: 4,
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.darkGrey
    },
    divider: {
        borderBottomColor: colors.accentColor1,
        borderWidth: 0.5
    }
})
