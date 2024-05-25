import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Welcome on the Home page!</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dff9fb'
    },
})