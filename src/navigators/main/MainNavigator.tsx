import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from '../../screens'
import { ScreenName } from '../../constants'
import { TabNavigator } from '../tab/TabNavigator'

const Stack = createNativeStackNavigator()

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenName.signIn} component={WelcomeScreen} />
        <Stack.Screen name={ScreenName.tabBar} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
