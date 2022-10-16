import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={[styles.rectangle,styles.rectangle_1]}>
        <Text style={styles.text}>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.rectangle,styles.rectangle_2]}>
        <Text style={styles.text}>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.rectangle,styles.rectangle_3]}>
        <Text style={styles.text}>Green: #96CC96</Text>
      </View>
      <View style={[styles.rectangle,styles.rectangle_4]}>
        <Text style={styles.text}>Yellow: #F4B940</Text>
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    rectangle:{
        flex:1,
        borderRadius:20,        
        justifyContent:"center",
        alignItems:"center"        
    },
    rectangle_1:{
        backgroundColor:"#C9C9FF",
        marginBottom:20
    },
    rectangle_2:{
        backgroundColor:"#3D85C6",
        marginBottom:20
    },
    rectangle_3:{
        backgroundColor:"#96CC96",
        marginBottom:20
    },
    rectangle_4:{
        backgroundColor:"#F4B940"
    },
    text:{
      fontWeight:"bold"
    }
}
)