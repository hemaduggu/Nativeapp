import React from 'react'
// import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../Tab1/Tab1';
import { Tab2 } from '../Tab2/Tab2';
import { Tab3 } from '../Tab3/Tab3';
const Tab = createBottomTabNavigator();
const Feed = () => {
  return (
    // <View style={{flex:1, backgroundColor:"yellow"}}>
     
    <Tab.Navigator  >
      <Tab.Screen name="tab1" component={Tab1}  options={{ headerShown: false }}/>
      <Tab.Screen name="tab2" component={Tab2}  options={{ headerShown: false }} />
      <Tab.Screen name="tab3" component={Tab3}  options={{ headerShown: false }}/>
     
    </Tab.Navigator>
  
  // </View>
  )
}

export default Feed