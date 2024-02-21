import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './header.styles'
import Bookmark from '../../../assets/icons/bookmark.svg'
import Magnify from '../../../assets/icons/magnify.svg'
import { COLORS, FONT_SIZE } from '../../../constants/theme'
import { User } from '../../../constants'

export const Header: React.FC = () => {
  const { user } = User
  const [searchText, setSearchText] = useState('')

  const onSearch = (text: string) => {
    setSearchText(text)
  }

  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}

        <View style={styles.subContainer}>
          {/* use SafeAreaView to add correct spacing from the top for iOS devices */}
          <SafeAreaView style={styles.contentContainer}>
            <Image
              source={require('../../../assets/images/user.png')}
              style={styles.profilePhoto}
            />

            <View style={styles.content}>
              <View>
                <Text style={styles.title}>Welcome,</Text>
                <Text style={styles.userName}>{user.fullName()}</Text>
              </View>

              <Bookmark
                width={FONT_SIZE.size_27}
                height={FONT_SIZE.size_27}
                fill={COLORS.primaryWhite}
              />
            </View>
          </SafeAreaView>
        </View>

        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.textInput}
            value={searchText}
            placeholder="Bath Cleaning"
            onChangeText={(text) => onSearch(text)}
            autoCorrect={false}
            autoComplete="off"
          />

          <TouchableOpacity style={styles.searchButton}>
            <Magnify
              width={FONT_SIZE.size_27}
              height={FONT_SIZE.size_27}
              fill={COLORS.primaryPurple}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  )
}
