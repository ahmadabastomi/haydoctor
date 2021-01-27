import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, IconDoctorFarmasi, IconDoctorPsikiater, IconDoctorUmum } from '../../assets'
import { CategoryCard, DoctorRated, NewsItem, SizedBox, UserProfile } from '../../components'
import { colors, fonts } from '../../utils'

const Doctors = () => {
    return (
        <View style={styles.bgContainer}>
            <View style={styles.pages}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SizedBox height={16}/>
                    <UserProfile />
                    <Text style={styles.titleCategory}>Mau konsultasi dengan{"\n"}siapa hari ini?</Text>
                    <View style={styles.containerCategory}>
                        <CategoryCard iconCategory={<IconDoctorUmum />} title="Umum" />
                        <SizedBox width={10} />
                        <CategoryCard iconCategory={<IconDoctorPsikiater />} title="Psikiater" />
                        <SizedBox width={10} />
                        <CategoryCard iconCategory={<IconDoctorFarmasi />} title="Obat" />
                    </View>
                    <Text style={styles.subTitle}>Top Rated Doctors</Text>
                    <DoctorRated avatar={DummyDoctor1} name="Alex Rachel" job="Pediatrician" />
                    <DoctorRated avatar={DummyDoctor2} name="Sunny Frank" job="Dentist" />
                    <DoctorRated avatar={DummyDoctor3} name="Audrey Christ" job="Podiatrist" />
                    <Text style={styles.newsText}>Good News</Text>
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </ScrollView>
            </View>
        </View>
    )
}

export default Doctors

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: colors.accentColor4
    },
    pages: {
        paddingHorizontal: 30,
        flexDirection: 'column',
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    titleCategory: {
        marginTop: 30,
        marginBottom: 16,
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.dark
    },
    containerCategory: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 130
    },
    subTitle: {
        marginTop: 30,
        marginBottom: 16,
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.dark
    },
    newsText: {
        marginTop: 14,
        marginBottom: 16,
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.dark
    }
});
