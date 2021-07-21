import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Forecast from './Forecast'

export default function Weather(props){
    
    const [forecastInfo, setForecastInfo] = useState({
        name: '-',
        country: '-',
        main: '-',
        description: '-',
        temp: 0,
        feel: 0,
        tempMax: 0,
        tempMin: 0
    })
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=8228a4c377dabb279e59ef3d5889326b`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    name: json.name,
                    country: json.sys.country,
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    feel: json.main.feels_like,
                    tempMax: json.main.temp_max,
                    tempMin: json.main.temp_min
                    
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
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

