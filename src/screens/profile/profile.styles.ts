import { Platform, StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    backgroundColor: COLORS.primaryPurple,
    paddingHorizontal: SPACING.space_20,
    paddingBottom: SPACING.space_15,
    paddingTop: Platform.OS === 'android' ? SPACING.space_40 : SPACING.space_20,
  },

  title: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_25,
    color: COLORS.primaryWhite,
    paddingBottom: SPACING.space_15,
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.space_20,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  name: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_25,
    color: COLORS.primaryWhite,
    paddingVertical: SPACING.space_10,
  },

  email: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhite,
    paddingVertical: SPACING.space_10,
  },

  menuContainer: {
    padding: 50,
    gap: SPACING.space_40,
  },

  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },

  menuItemTitle: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_20,
    color: COLORS.primaryBlack,
  },
})
