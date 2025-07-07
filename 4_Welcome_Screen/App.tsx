import { StyleSheet, Text, View, Image, TouchableOpacity , ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <ImageBackground
      source={require('./src/assets/grad2.jpeg')}  
      style={styles.background}
      resizeMode="cover" 
    >
    <View style={styles.container}>
      <Image source={require("./src/assets/clock.png")} style={styles.welcome} />
      <Text style={styles.mainText}>Welcome to My React Native App!</Text>
<Text style={styles.secondText}>Built with passion. Powered by code.</Text>
<Text style={styles.downText}>This is part of my learning journey in mobile app development.</Text>
<Text style={styles.down2Text}>Clean UI. Smooth UX. Real Projects.</Text>
      <Text style={styles.tapText}>Tap below to login or signup</Text>
      
      <View style={styles.buttoncontainer}>
        <TouchableOpacity
          style={[styles.loginButtonWrapper,
            {
              backgroundColor:
                activeTab === 'login'
                  ? 'rgba(20, 122, 104, 0.86)'
                  : '#FFFFFF',
            },
          ]}
          onPress={() => setActiveTab('login')}
        >
          <Text
            style={[styles.loginButtonText,
              {
                color: activeTab === 'login' ? '#FFFFFF' : '#000000',
              },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.signupButtonWrapper,
            {
              backgroundColor:
                activeTab === 'signup'
                  ? 'rgba(20, 122, 104, 0.86)'
                  : '#FFFFFF',
            },
          ]}
          onPress={() => setActiveTab('signup')}
        >
          <Text
            style={[
              styles.signupButtonText,
              {
                color: activeTab === 'signup' ? '#FFFFFF' : '#000000',
              },
            ]}
          >
            Sign-up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  background:{
    flex: 1,
  width: '100%',
  height: '100%',
  },
  container :{
    flex :1,
    alignItems :'center',
    // justifyContent:'center',
    // backgroundColor :'#FFFFFF'
  },
  welcome :{
    // height : '40%',
    height: height * 0.4,
    width : width * 0.95,
    marginTop : 60,
     resizeMode: 'contain'
  },
  mainText:{
    marginTop : 20,
    fontFamily: 'Montserrat-BoldItalic', 
    fontSize: 15
  },
  secondText:{
    fontFamily: 'Montserrat-BoldItalic', 
    fontSize: 15
  },
  downText:{
    textAlign :'center',
    marginTop : 20,
    fontFamily: 'Montserrat-Regular', 
    fontSize: 15
  },
  down2Text:{
    // marginBottom : 20,
    fontFamily: 'Montserrat-Regular', 
    fontSize: 13
  },
  tapText:{fontFamily: 'Montserrat-SemiBold', 
    fontSize: 16,
    marginTop : 30
  },
  buttoncontainer:{
      flexDirection :'row',
      marginTop : 20,
      borderWidth :2 ,
      borderColor : '#168E79',
      width :  width * 0.899,
      // height : height * 0.2
      height : 60,
      borderRadius : 100,
      backgroundColor : '#FFFFFF',
      overflow: 'hidden',
    },
    loginButtonWrapper :{
      flex: 1,
      justifyContent :'center',
      alignItems :'center',
      // width :'50%',
      backgroundColor : 'rgba(20, 122, 104, 0.86)',
      borderRadius : 100
    },
    loginButtonText :{
      fontFamily: 'Montserrat-SemiBold',
      fontSize :20,
      color :'#FFFFFF'
    },
    signupButtonWrapper :{
      flex: 1,
      justifyContent :'center',
      alignItems :'center',
      // width : '50%',
      // backgroundColor : '#007487',
      borderRadius : 100,
      backgroundColor: '#FFFFFF',
    },
    signupButtonText :{
      fontFamily: 'Montserrat-SemiBold',
      fontSize :20,
      color :'#000000'
    }
})
