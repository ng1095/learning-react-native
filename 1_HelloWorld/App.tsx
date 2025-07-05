import React from "react";
import {
View,
Text,
useColorScheme,
StyleSheet
} from "react-native";
import { JSX } from "react/jsx-runtime";

function App() : JSX.Element{
    const isDarkMode = useColorScheme()==="dark";
    return(
        <View style = {styles.container}>
            <Text style = {isDarkMode ? styles.whiteText : styles.blackText}>Hello!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex :1,
        alignContent : 'center'
    },
    whiteText : {
        color : '#FFFFFF'
    },
    blackText :{
        color : '#000000'
    },
})
export default App
