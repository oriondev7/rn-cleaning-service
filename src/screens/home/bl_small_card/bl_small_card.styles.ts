import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: SPACING.space_10,
  },

  image: {
    width: 160,
    height: 100,
    borderRadius: BORDER_RADIUS.radius_10,
  },

  info: {
    padding: SPACING.space_5,
    gap: SPACING.space_3,
  },

  name: {
    fontSize: FONT_SIZE.size_17,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryBlack,
  },

  contactPerson: {
    fontSize: FONT_SIZE.size_13,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryGray,
  },

  categoryContainer: {
    padding: SPACING.space_3,
    backgroundColor: COLORS.primaryLightPurple,
    borderRadius: BORDER_RADIUS.radius_3,
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.space_5,
  },

  category: {
    fontSize: FONT_SIZE.size_10,
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryPurple,
  },
})
