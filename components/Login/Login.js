import React, { useState } from 'react'
import {View, Text, TextInput, StyleSheet} from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native';
const Login = ({navigation}) => {
  const [details, setDetails]=useState({username:"", password:""})
  // const [username, setUsername]=useState("")
 
  const onChangeText=(value, field)=>{
   setDetails({...details, [field]:value})
  }

 const handleSubmit= async () => {
  
  try {
    await AsyncStorage.setItem('userdetails',JSON.stringify(details));
    let jsonValue = await AsyncStorage.getItem('userdetails');
  const _data=  jsonValue != null ? JSON.parse(jsonValue) : null;
    console.log(_data)
  } catch (e) {
    console.log(e)
  }
};
 const {username, password}=details
//  console.log(details)
  return (
   
    <View>
        <Text>Login page</Text>
        <Text>Username:</Text>
        <TextInput
        name='username'
        style={styles.input}
        onChangeText={(txt)=>onChangeText(txt,"username")}
        value={username}
      />
       <Text>password:</Text>
        <TextInput
        name="password"
        style={styles.input}
        onChangeText={(txt)=>onChangeText(txt, "password")}
        value={password}
      />
       <TouchableOpacity style={styles.button}
        onPress={handleSubmit} >
            {/* onPress={()=>navigation.navigate('Parent')} > */}
                <Text style={{fontSize:20}}>Login</Text>
                </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
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
  });
export default Login