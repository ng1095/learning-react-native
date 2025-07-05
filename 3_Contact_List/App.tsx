import { StyleSheet, Text, View , ScrollView , Image } from 'react-native'
import React from 'react'

const Contactlist = () => {
    const contacts =[
         {
  uid: 1,
  name: 'Rahul Verma',
  status: 'Crafting seamless UPI experiences',
  imageUrl: 'https://avatars.githubusercontent.com/u/10234567?v=4',
},
{
  uid: 2,
  name: 'Sneha Rao',
  status: 'Leading the charge in fintech design',
  imageUrl: 'https://avatars.githubusercontent.com/u/18392453?v=4',
},
{
  uid: 3,
  name: 'Sanket Singh',
  status: 'Making your GPay smooth',
  imageUrl: 'https://ui-avatars.com/api/?name=Sanket+Singh&background=random',
},
{
  uid: 4,
  name: 'Anirudh Jwala',
  status: 'Building secure Digital banks',
  imageUrl: 'https://ui-avatars.com/api/?name=Anirudh+Jwala&background=random',
},
{
  uid: 5,
  name: 'Priya Sharma',
  status: 'Revolutionizing UPI payments at PhonePe',
  imageUrl: 'https://avatars.githubusercontent.com/u/13429756?v=4',
},
{
  uid: 6,
  name: 'Rohan Mehta',
  status: 'Scaling infrastructure for 100M+ users',
  imageUrl: 'https://avatars.githubusercontent.com/u/8932749?v=4',
},
{
  uid: 7,
  name: 'Kavita Bansal',
  status: 'Designing human-centered fintech apps',
  imageUrl: 'https://avatars.githubusercontent.com/u/16857972?v=4',
}
];
  return (
    <View style={styles.screen}>
      <Text style = {styles.headingText}>Contact List</Text>
      <Text style = {styles.description}>Whatsapp Style Design</Text>
      <ScrollView style = {styles.container} scrollEnabled = {true}>
        {contacts.map(({uid , name , status , imageUrl})=>(
            <View key={uid} style = {styles.userCard}>
                <Image source = {{
                    uri : imageUrl
                }} 
                style = {styles.userImage}/>
                <View>
                <Text style ={styles.userName}>{name}</Text>
                <Text style ={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Contactlist

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#101010',
    paddingVertical: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 12,
    color: '#fff',
  },
  description: {
  fontSize: 18,
  color: '#bbbbbb',
  paddingHorizontal: 16,
  // paddingTop: 4,
  paddingBottom: 12,
  fontStyle: 'italic',
  marginBottom : 9,
},
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2, // adds subtle shadow
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  userStatus: {
    fontSize: 13,
    color: '#bbbbbb',
    marginTop: 2,
  },
});
