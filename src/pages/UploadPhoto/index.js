import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ILBtnAddPhoto, ILLogo, ILUserPhotoNull } from '../../assets'
import { Button, FlatButton, Header, SizedBox } from '../../components'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title='Upload Photo' actionBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.profileWrapper}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.imageWrapper} source={ILUserPhotoNull} />
                        <View style={styles.buttonAddPhoto}>
                            <Pressable>
                                <ILBtnAddPhoto />
                            </Pressable>
                        </View>
                    </View>
                    <Text style={styles.labelName}>Full Name Text</Text>
                    <Text style={styles.labelJob}>Job</Text>
                </View>
                <View style={styles.wrapper}>
                    <Button title='Upload and Continue' />
                    <SizedBox height={30} />
                    <FlatButton title='Skip for this' />
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        display: 'flex',
        flex: 1,
        paddingHorizontal: 40,
        paddingBottom: 50,
        justifyContent: 'space-between'
    },
    wrapper: {
        alignItems: 'center'
    },
    profileWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    imageContainer: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.accentColor3,
        padding: 10,
    },
    imageWrapper: {
        width: 110,
        height: 110,
    },
    buttonAddPhoto: {
        position: 'absolute',
        top: 85,
        left: 95,
        right: 0,
        bottom: 0,
    },
    labelName: {
        marginTop: 26,
        fontFamily: fonts.primary[600],
        fontSize: 24,
        color: colors.text.dark
    },
    labelJob: {
        marginTop: 4,
        marginBottom: 88,
        fontFamily: fonts.primary[400],
        fontSize: 18,
        color: colors.text.darkGrey
    }
})
