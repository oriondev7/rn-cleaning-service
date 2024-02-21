import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CategoryScreen, DetailsScreen, HomeScreen } from '../../screens'
import { ScreenName } from '../../constants'

const Stack = createNativeStackNavigator()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.home} component={HomeScreen} />
      <Stack.Screen name={ScreenName.category} component={CategoryScreen} />
      <Stack.Screen name={ScreenName.details} component={DetailsScreen} />
    </Stack.Navigator>
  )
}
