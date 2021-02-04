import React from 'react'
import { ScrollView, StyleSheet, Text, View,StatusBar } from 'react-native'
import { Header, InputField, Button, SizedBox } from '../../components';
import { colors } from '../../utils';

const SignUp = ({ navigation }) => {
    return (
        <ScrollView>
            <StatusBar backgroundColor={colors.accentColor4} />
            <Header title='Daftar Akun' actionBack={() => navigation.goBack()} />
            <View style={styles.content}>
                <InputField label='Full Name' />
                <SizedBox height={24} />
                <InputField label='Pekerjaan' />
                <SizedBox height={24} />
                <InputField label='Email Adress' />
                <SizedBox height={24} />
                <InputField label='Password' type='password' />
                <SizedBox height={40} />
                <Button title='Continue' onPress={() => navigation.navigate('UploadPhoto')} />
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    content: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 50
    }
})
