import { Platform, StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    padding: SPACING.space_20,
    paddingTop: Platform.OS === 'android' ? SPACING.space_40 : SPACING.space_20,
    backgroundColor: COLORS.primaryPurple,
    borderBottomLeftRadius: BORDER_RADIUS.radius_25,
    borderBottomRightRadius: BORDER_RADIUS.radius_25,
  },

  subContainer: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentContainer: {
    // for SafeAreaView to add correct spacing from the top for iOS devices
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },

  profilePhoto: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bookmark: {
    width: 27,
    height: 27,
  },

  title: {
    color: COLORS.primaryWhite,
    fontFamily: FONT_FAMILY.outfit_regular,
  },

  userName: {
    color: COLORS.primaryWhite,
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.outfit_medium,
  },

  searchBarContainer: {
    marginTop: SPACING.space_15,
    flexDirection: 'row',
    gap: SPACING.space_10,
    marginBottom: SPACING.space_10,
  },

  textInput: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: BORDER_RADIUS.radius_8,
    width: '85%',
    fontSize: FONT_SIZE.size_16,
    fontFamily: FONT_FAMILY.outfit_regular,
  },

  searchButton: {
    backgroundColor: COLORS.primaryWhite,
    padding: 10,
    borderRadius: BORDER_RADIUS.radius_8,
  },
})
