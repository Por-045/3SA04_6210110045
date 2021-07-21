import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'

const availableZipItems = [
    { place: 'Chonburi', code: '20000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style = {styles.zipItem}>
            <Text style = {styles.baseText}>{place}</Text>
            <Text style = {styles.baseText}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation( )
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    baseText: {
        fontSize: 16,
    }
})