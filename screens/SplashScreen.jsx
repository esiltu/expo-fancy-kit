import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';

export default function SplashScreen() {
    const animation = useRef(null)

    const [fontsLoaded, fontError] = useFonts({
        'DynaPuff-Medium': require('../assets/fonts/DynaPuff-Medium.ttf')
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={require('../assets/animation/shade-one.png')} style={styles.imageStyle} />
                <Image source={require('../assets/animation/shadow-two.png')} style={styles.imageStyleSecond} />
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.midContainerTxt}>Welcome to Fancy UI Kit! 👋</Text>
                <Text style={styles.midContainerSecondTxt}>Get started and explore quick 🍔🍟</Text>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={styles.animationStyle}
                    source={require('../assets/animation/splashscreen-animation.json')}
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4CFC2'
    },
    midContainer: {
        bottom: '5%',
    },
    midContainerTxt: {
        fontFamily: 'DynaPuff-Medium',
        fontSize: 25,
        textAlign: 'center',
        color: '#303952',
        marginBottom: 5,
    },
    midContainerSecondTxt: {
        fontFamily: 'DynaPuff-Medium',
        fontSize: 18,
        textAlign: 'center',
        color: '#596275'
    },
    imageStyle: {
        width: 115,
        height: 145,
        right: '5%',
    },
    imageStyleSecond: {
        width: 150,
        height: 145,
        alignSelf: 'flex-end',
        left: '6%',
        bottom: '30%',
    },
    animationStyle: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        backgroundColor: '#E4CFC2',
    }
})