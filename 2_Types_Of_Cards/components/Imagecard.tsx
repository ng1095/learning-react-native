// import { StyleSheet, Text, View ,Image } from 'react-native'
// import React from 'react'

// const Imagecard = () => {
//   return (
//     <View>
//       <Text style ={styles.heading}>Imagecard-FancyCard</Text>
//       <Text style ={styles.text1}>React - Native</Text>
//       <View style ={[styles.card , styles.cardElevated]}>
//       <Image source = {{
//         uri :'https://in.pinterest.com/pin/785033778833809909/'
//       }}
//       style ={styles.cardImage} />
//       <View style = {styles.cardBody}>
//         <Text style = {styles.cardTitle}>Learning React Native</Text>
//         <Text style = {styles.cardLabel}></Text>
//         <Text style = {styles.cardDescription}></Text>
//       </View>
//       </View>
//     </View>
//   )
// }

// export default Imagecard

// const styles = StyleSheet.create({
//   heading :{},
//   text1 :{},
//   card :{},
//   cardElevated :{},
//   cardImage :{},
//   cardBody :{},
// })

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Imagecard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Imagecard - FancyCard</Text>
      <Text style={styles.text1}>React Native</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://www.orgodigital.com/wp-content/uploads/2024/12/React-Native-App-Upgrades-and-Migration.jpg.webp',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Learning React Native</Text>
          <Text style={styles.cardLabel}>Hands On Practice</Text>
          <Text style={styles.cardDescription}>
            This card showcases a beautiful image and a short description to get started with React Native.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Imagecard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  text1: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  card: {
    borderRadius: 12,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  cardElevated: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});
