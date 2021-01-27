import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AirbnbRating } from 'react-native-ratings'
import { DummyDoctor1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorRated = ({ avatar, name, job }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperImage}>
                <Image style={styles.imageDoctor} source={avatar} />
            </View>
            <View style={styles.wrapperText}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textJob}>{job}</Text>
            </View>
            <View style={styles.wrapperStar}>
                <AirbnbRating
                    isDisabled={true}
                    showRating={false}
                    size={20}
                    defaultRating={5}
                />
            </View>
        </View>
    )
}

export default DoctorRated

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center',
    },
    wrapperImage: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    imageDoctor: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    wrapperStar: {
        marginLeft: 'auto'
    },
    wrapperText: {
        marginLeft: 12
    },
    textName: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.dark
    },
    textJob: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.darkGrey
    }
})
