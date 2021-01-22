import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { InputField, SizedBox, FlatButton, Button } from '../../components';

const SignIn = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ILLogo />
                <Text style={styles.textSignIn}>Sign In Page</Text>
                <InputField label='Username' />
                <SizedBox height={24} />
                <InputField label='Password' type='password'/>
                <SizedBox height={10} />
                <FlatButton title='Forgot My Password' />
                <SizedBox height={40} />
                <Button title='Sign In' />
                <SizedBox height={30} />
                <View style={styles.centerVertical}>
                    <FlatButton title='Create New Account' fontSize={16} />
                </View>
                <SizedBox height={50} />
            </View>
        </ScrollView>
    )
}

export default SignIn

const styles = StyleSheet.create({
    centerVertical: {
        alignItems: 'center'
    },
    container: {
        padding: 40,
        display: 'flex',
    },
    textSignIn: {
        marginTop: 40,
        marginBottom: 40,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold'
    }
});