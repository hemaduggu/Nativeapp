import React from 'react'
import { View } from 'react-native'
import { MyDrawer } from '../../DrawerNavigator/MyDrawer'


export const Parent = () => {
  return (
   <View style={{flex:1, backgroundColor:'red'}}>
   <MyDrawer/>
    </View>
  )
}
