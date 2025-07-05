import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcard() {
  return (
    <View>
        <Text style ={styles.heading}>Flat card</Text>
        <View style={styles.container}>
                <View style ={[styles.card , styles.cardOne]}>
                        <Text>Pale Sky Blue</Text>
                </View>
                <View style ={[styles.card , styles.cardTwo]}>
                    <Text>Muted Teal</Text>
                </View>
                <View style ={[styles.card , styles.cardThree]}>
                    <Text>Lavender Gray</Text>
                </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        fontWeight : 'bold',
        padding : 6
    },
    container :{
        flex :1,
        flexDirection : 'row'
    },
    card :{
        flex :1,
        alignItems :'center',
        justifyContent :'center',
        height : 100,
        width : 100,
        margin : 6,
        padding : 10,
    },
    cardOne:{
        backgroundColor : '#CBE7F5'
    },
    cardTwo:{
        backgroundColor : '#A7DADC'
    },
    cardThree:{
        backgroundColor : '#D6D5E6'
    },
})
