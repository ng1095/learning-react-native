import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import React from 'react';

const Elevatedcard = () => {
  return (
    <View>
      <Text style ={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style={styles.container}>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#FDE2E4'}]}>
                <Text>This</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#FACBD9'}]}>
                <Text>Are</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#EFD3F5'}]}>
                <Text>Elevated</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#E6E6FA'}]}>
                <Text>Cards</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#ECE7F0'}]}>
                <Text>Which</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#F2E9DC'}]}>
                <Text>Are</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#F5F5DC'}]}>
                <Text>Scrollable</Text>
            </View>
            <View style ={[styles.card , styles.cardElevated , {backgroundColor :'#FBF8EF'}]}>
                <Text>😊</Text>
            </View>
      </ScrollView>
    </View>
  )
}

export default Elevatedcard

const styles = StyleSheet.create({
    heading : {
        fontSize : 25,
        fontWeight : 'bold',
        padding : 6
    },
    container :{
        padding:8,
        flex : 1,
        flexDirection : 'row',
    },
    card :{
        alignItems : 'center',
        justifyContent :'center',
        height : 90,
        width : 90,
        borderRadius : 4,
        margin : 8,
        color : '#000000',
    },
    cardElevated :{
        elevation : 8 ,
        shadowOffset : {
            width : 1,
            height : 1
        },
        shadowColor : '#333',
        shadowOpacity : 0.4 ,
        shadowRadius : 2,
    },
})