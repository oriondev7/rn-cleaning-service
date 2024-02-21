import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IconName, ScreenName } from '../../constants'
import { ProfileScreen } from '../../screens'
import { Image, Text } from 'react-native'
import { styles } from './tab.styles'
import { HomeNavigator } from '../home/HomeNavigator'
import { BookingNavigator } from '../booking/BookingNavigator'

const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ScreenName.homeNavigator}
        component={HomeNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.label,
                focused ? styles.focusedLabel : styles.unfocusedLabel,
              ]}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? IconName.homeFilled : IconName.home}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.bookingNavigator}
        component={BookingNavigator}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.label,
                focused ? styles.focusedLabel : styles.unfocusedLabel,
              ]}
            >
              Booking
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? IconName.bookingFilled : IconName.booking}
              style={styles.icon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                styles.label,
                focused ? styles.focusedLabel : styles.unfocusedLabel,
              ]}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? IconName.profileFilled : IconName.profile}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
