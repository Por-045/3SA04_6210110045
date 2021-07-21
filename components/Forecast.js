import React from 'react'
import { Text, View } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text>{props.name} {props.country}</Text>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>อุณหภูมิ : {props.temp} °C</Text>
            <Text>อุณหภูมิที่รู้สึก : {props.feel} °C</Text>
            <Text>อุณหภูมิสูงสุด/ต่ำสุด : {props.tempMax}/{props.tempMin} °C</Text>
        </View>
    )
}