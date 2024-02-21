import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BookingScreen, DetailsScreen } from '../../screens'
import { ScreenName } from '../../constants'

const Stack = createNativeStackNavigator()

export const BookingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreenName.booking} component={BookingScreen} />
      <Stack.Screen name={ScreenName.details} component={DetailsScreen} />
    </Stack.Navigator>
  )
}
