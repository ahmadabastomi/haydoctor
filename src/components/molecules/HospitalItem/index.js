import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

const HospitalItem = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageHospital} source={DummyHospital1} />
            <View style={styles.content}>
                <Text style={styles.textHospital}>Rumah Sakit</Text>
                <Text style={styles.textHospital}>Citra Bunga Merdeka</Text>
                <Text style={styles.textStreet}>Jl. Surya Sejahtera 20</Text>
            </View>
        </View>
    )
}

export default HospitalItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.accentColor1
    },
    imageHospital: {
        width: 80,
        height: 70,
        borderRadius: 10,
    },
    content: {
        flexDirection: 'column',
        marginLeft: 16
    },
    textHospital: {
        fontFamily: fonts.primary[400],
        color: colors.text.dark,
        fontSize: 16
    },
    textStreet: {
        marginTop: 6,
        fontFamily: fonts.primary[300],
        fontSize: 12,
        color: colors.text.darkGrey
    }

})
