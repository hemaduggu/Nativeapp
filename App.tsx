import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import { Parent } from './components/Parent/Parent';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
 
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Parent" component={Parent} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{ title:"Welcome" }}/>
      
        <Stack.Screen name="register" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;