import React from 'react'
import { Image } from 'react-native'
import { ImageBackground } from 'react-native'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { HospitalItem, SizedBox} from '../../components';
import { ILBgHospital } from '../../assets'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.pages}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ImageBackground source={ILBgHospital} style={styles.header}>
                        <Text style={styles.title}>Nearby Hospital</Text>
                        <Text style={styles.subtitle}>8 Tersedia</Text>
                        <View style={styles.subcontent}>
                            <SizedBox height={14} />
                            <HospitalItem />
                            <HospitalItem />
                            <HospitalItem />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    pages: {
        backgroundColor: colors.accentColor4,
        flex: 1
    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    content: {
    },
    header: {
        width: Dimensions.get('window').width,
        height: 240
    },
    title: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.primary[600],
        fontSize: 20,
        marginTop: 30
    },
    subtitle: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.primary[400],
        fontSize: 14
    },
    subcontent: {
        backgroundColor: colors.white,
        flex: 1,
        marginTop: 133,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    }
})
