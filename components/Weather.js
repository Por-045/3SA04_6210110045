import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.backgroundTextColor}>
                <Text style={styles.baseText}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    backgroundTextColor: {
        flex: 0.45,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    baseText: {
        paddingTop: 20,
        fontSize: 25
    }
})

