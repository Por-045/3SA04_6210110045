import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.baseText}>สถานที่ : {props.name} {props.country}</Text>
            <Text style={styles.baseText}>สภาพอากาศ : {props.main}</Text>
            <Text style={styles.baseText}>คำอธิบาย : {props.description}</Text>
            <Text style={styles.baseText}>อุณหภูมิ : {props.temp} °C</Text>
            <Text style={styles.baseText}>อุณหภูมิที่รู้สึก : {props.feel} °C</Text>
            <Text style={styles.baseText}>อุณหภูมิสูงสุด/ต่ำสุด : {props.tempMax}/{props.tempMin} °C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
        padding: 5,
        fontSize: 18
    }
})