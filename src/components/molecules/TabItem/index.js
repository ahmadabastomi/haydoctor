import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDoctorsActive, IconDoctorsDeactive, IconHospitalsActive, IconHospitalsDeactive, IconMessagesActive, IconMessagesDeactive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ type, isFocused }) => {
    const Icon = () => {
        if (type === 'Doctors') {
            return (isFocused) ? <IconDoctorsActive /> : <IconDoctorsDeactive />
        } else if (type === 'Messages') {
            return (isFocused) ? <IconMessagesActive /> : <IconMessagesDeactive />
        } else if (type === 'Hospitals') {
            return (isFocused) ? <IconHospitalsActive /> : <IconHospitalsDeactive />
        } else {
            return (
                <Text>No Icons</Text>
            )
        }
    }
    return (
        <View style={styles.container}>
            <Icon />
            <Text style={styles.labelTab(isFocused)}>{type}</Text>
        </View>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    labelTab: (isFocused) => ({
        marginTop: 4,
        color: (isFocused) ? colors.text.activeTab : colors.text.deactiveTab,
        fontFamily: fonts.primary[600]
    })
})
