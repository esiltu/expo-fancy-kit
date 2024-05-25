import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { useFonts } from 'expo-font'

const OnboardingPage = () => {
    const [fontsLoaded, fontError] = useFonts({
        'DynaPuff-Medium': require('../assets/fonts/DynaPuff-Medium.ttf')
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false} >
            {/* Slide 1 */}
            <View style={styles.slide}>
                <View style={styles.slideImageContainer}>
                    <Image source={require('../assets/onboarding/imageHeader.png')} style={styles.imageHeader} />
                </View>
                <View>
                    <Image source={require('../assets/onboarding/image-1.png')} style={styles.slideImage} />
                </View>
                <View style={styles.slideTxtView}>
                    <Text style={styles.slideText}>Browse the menu and order directly from the applciation</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={require('../assets/onboarding/Group 9.png')} style={styles.buttonImageForward} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* End Of Slide 1 */}
            {/* Slide 2 */}
            <View style={styles.slide}>
                <View style={styles.slideImageContainer}>
                    <Image source={require('../assets/onboarding/imageHeader.png')} style={styles.imageHeader} />
                </View>
                <View>
                    <Image source={require('../assets/onboarding/image-2.png')} style={styles.slideImage} />
                </View>
                <View style={styles.slideTxtView}>
                    <Text style={styles.slideText}>Your order will be immediately collected an sent by our courier</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={require('../assets/onboarding/Group 9.png')} style={styles.buttonImageForward} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* End Of Slide 2 */}
            {/* Slide 3 */}
            <View style={styles.slide}>
                <View style={styles.slideImageContainer}>
                    <Image source={require('../assets/onboarding/imageHeader.png')} style={styles.imageHeader} />
                </View>
                <View>
                    <Image source={require('../assets/onboarding/image-3.png')} style={styles.slideImage} />
                </View>
                <View style={styles.slideTxtView}>
                    <Text style={styles.slideText}>Your order will be immediately collected an sent by our courier</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={require('../assets/onboarding/Group 9.png')} style={styles.buttonImageForward} />
                    </TouchableOpacity>
                </View>
            </View>
            {/* End Of Slide 3 */}
        </Swiper>
    )
}

export default OnboardingPage

const styles = StyleSheet.create({
    wrapper: {},
    imageHeader: {
        width: 400,
        height: 500,
        top: '20%',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6E4D4'
    },
    slideImage: {
        width: 250,
        height: 250,
        bottom: '50%',
    },
    slideText: {
        fontSize: 23,
        textAlign: 'center',
        padding: 50,
        fontFamily: 'DynaPuff-Medium',
    },
    slideTxtView: {
        bottom: '20%',
    },
    viewButton: {
        bottom: '22%'
    },
    buttonImageForward: {
        width: 120,
        height: 160,
    },
})