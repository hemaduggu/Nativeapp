import React from 'react'
import {View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
const Home = ({navigation}) => {
  return (
    <View style={styles.container} > 
    
         <Text style={styles.welcometext}>Welcome to Awesome App!</Text>   
        <Image style={styles.imgcont}  source={require('../../images/avtar.png')}/>
        <Text style={styles.msg}>{'Please log in to continue\n to the awesommess'}</Text>
 
     
        <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:100, gap:20}}>
            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate('Login')} >
                <Text style={{fontSize:20}}>Login</Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             onPress={()=>navigation.navigate('register')}>
                <Text style={{fontSize:20}}>Register</Text>
                </TouchableOpacity>
        </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   backgroundColor:"pink",
   flex:1,
   display:'flex',
alignItems:'center',
justifyContent:'center',


  },
  header: {
    fontSize: 12,
    fontFamily: 'Cochin'
  },
  welcometext:{
fontSize:25,
color:'red',


  },
  imgcont:{
    width:200,
    height:200,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:200/2,
    backgroundColor:'red'
  },
  msg:{
    fontSize:20,

  },
  button:{
    width:'30%',
    backgroundColor:'green',
    fontWeight:700,
    padding:10,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,

  }
 
})
export default Home