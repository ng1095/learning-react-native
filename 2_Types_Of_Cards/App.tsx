import { View, Text ,SafeAreaView,ScrollView} from 'react-native';
import React from 'react';
import Flatcard from './components/Flatcard';
import Elevatedcard from './components/Elevatedcard';
import Imagecard from './components/Imagecard';
import BlogCard from './components/Blogcard';


const App = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <Flatcard></Flatcard>
      <Elevatedcard></Elevatedcard>
      <Imagecard></Imagecard>
      <BlogCard></BlogCard>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App
