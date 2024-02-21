import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './profile.styles'
import { User } from '../../constants'
import Home from '../../assets/icons/home_menu.svg'
import Bookmark from '../../assets/icons/bookmark_menu.svg'
import Envelope from '../../assets/icons/envelope_menu.svg'
import Logout from '../../assets/icons/logout_menu.svg'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const ProfileScreen = () => {
  const { user } = User

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <SafeAreaView>
          <Text style={styles.title}>Profile</Text>

          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.image}
            />

            <Text style={styles.name}>{user.fullName()}</Text>

            <Text style={styles.email}>{user.userEmail}</Text>
          </View>
        </SafeAreaView>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItemContainer}>
          <Home
            width={FONT_SIZE.size_35}
            height={FONT_SIZE.size_35}
            fill={COLORS.primaryPurple}
          />
          <Text style={styles.menuItemTitle}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemContainer}>
          <Bookmark
            width={FONT_SIZE.size_35}
            height={FONT_SIZE.size_35}
            fill={COLORS.primaryPurple}
          />
          <Text style={styles.menuItemTitle}>My Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemContainer}>
          <Envelope
            width={FONT_SIZE.size_35}
            height={FONT_SIZE.size_35}
            fill={COLORS.primaryPurple}
          />
          <Text style={styles.menuItemTitle}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItemContainer}>
          <Logout
            width={FONT_SIZE.size_35}
            height={FONT_SIZE.size_35}
            fill={COLORS.primaryPurple}
          />
          <Text style={styles.menuItemTitle}>Sing Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
