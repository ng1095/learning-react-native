// import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
// import React from 'react';

// const BlogCard = () => {
  

//   const handleFollow = () => {
//     Linking.openURL('https://github.com/ng1095');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Blog Card</Text>

//       <View style={[styles.card, styles.cardElevated]}>
//         <View style={styles.banner}>
//           <Text style={styles.bannerText}>Beginner’s Guide to React Native</Text>
//         </View>
//         <Image
//           source={{
//             uri: 'https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-127416.jpg?semt=ais_hybrid&w=740',
//           }}
//           style={styles.cardImage}
//         />
//         <View style={styles.cardContent}>
//           <Text style={styles.blogTitle}>Getting Started with React Native</Text>
//           <Text style={styles.blogMeta}>by Nilakshi Garg · July 4, 2025</Text>
//           <Text style={styles.blogDescription}>
//             Learn the basics of React Native, including setup, core components, and creating an app.
//           </Text>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity style={styles.button}>
//               <Text style={styles.buttonText}>Read More</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={[styles.button, styles.followButton]} onPress={handleFollow}>
//               <Text style={styles.buttonText}>Follow Me</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default BlogCard;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   card: {
//     backgroundColor: '#fefefe',
//     borderRadius: 12,
//     overflow: 'hidden',
//   },
//   cardElevated: {
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 1, height: 2 },
//     shadowRadius: 4,
//   },
//   banner: {
//     backgroundColor: '#e67e22', // Orange banner
//     paddingVertical: 6,
//     paddingHorizontal: 10,
//   },
//   bannerText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//     textAlign: 'center',
//   },
//   cardImage: {
//     position :'relative',
//     width: '100%',
//     height: 180,
//     resizeMode: 'cover',
//   },
//   cardContent: {
//     padding: 12,
//   },
//   blogTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 6,
//   },
//   blogMeta: {
//     fontSize: 12,
//     color: '#888',
//     marginBottom: 8,
//   },
//   blogDescription: {
//     fontSize: 14,
//     color: '#444',
//     marginBottom: 12,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   button: {
//     backgroundColor: '#2e86de',
//     paddingVertical: 8,
//     paddingHorizontal: 14,
//     borderRadius: 8,
//   },
//   followButton: {
//     backgroundColor: '#27ae60',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const BlogCard = () => {

  const handleFollow = () => {
    Linking.openURL('https://github.com/ng1095'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blog Card</Text>

      <View style={[styles.card, styles.cardElevated]}>
        
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-127416.jpg?semt=ais_hybrid&w=740',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerText}>Beginner’s Guide to React Native</Text>
          </View>

        <View style={styles.cardContent}>
          <Text style={styles.blogTitle}>Getting Started with React Native</Text>
          <Text style={styles.blogMeta}>by Nilakshi Garg · July 4, 2025</Text>
          <Text style={styles.blogDescription}>
            Learn the basics of React Native, including setup, core components, and creating an app.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRead}>
              <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonFollow} onPress={handleFollow}>
              <Text style={styles.buttonText}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  container: {
  padding: 16,
  backgroundColor: '#fff',
  flex: 1, 
},
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: '#fefefe',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardElevated: {
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
  },
  imageWrapper: {
    position: 'relative',
  },
  cardImage: {
    width: 'auto',
    height: 250,
    resizeMode: 'contain',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: '#6a1b9a', 
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  cardContent: {
    padding: 12,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000',
  },
  blogMeta: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  blogDescription: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  buttonRead: {
    backgroundColor: '#2e86de',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonFollow: {
    backgroundColor: '#27ae60',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});



