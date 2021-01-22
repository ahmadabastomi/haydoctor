import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted');
        }, 3000);
        return () => {
        }
    }, [])
    return (
        <>
            <View style={styles.container}>
                <ILLogo />
                <Text style={styles.textLogo}>Hay Doctor</Text>
            </View>
        </>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    textLogo: {
        marginTop: 20,
        fontSize: 20,
        color: '#112340',
        fontWeight: '600'
    }
});
