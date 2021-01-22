import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { ILBgGetStarted, ILLogo } from '../../assets';
import { Button, SizedBox } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={ILBgGetStarted} style={styles.background}>
            <View style={styles.container}>
                <View>
                    <ILLogo />
                    <Text style={styles.textInfo}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title='Get Started' onPress={() => {navigation.navigate('SignUp')}}/>
                    <SizedBox height={16} />
                    <Button type='secondary' title='Sign In' onPress={() => {navigation.replace('SignIn')}}/>
                </View>
            </View>
        </ImageBackground>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 44,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1
    },
    textInfo: {
        marginTop: 91,
        fontSize: 28,
        color: 'white',
        fontFamily: 'Nunito-SemiBold'

    },
    background: {
        display: 'flex',
        flex: 1
    },
    buttonStyle: {
        alignItems: 'center',
    }
});
