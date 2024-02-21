import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  infoContainer: {
    padding: SPACING.space_20,
    gap: SPACING.space_7,
  },

  title: {
    fontSize: FONT_SIZE.size_25,
    fontFamily: FONT_FAMILY.outfit_bold,
    color: COLORS.primaryBlack,
  },

  contactPerson: {
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryPurple,
  },

  infoSubContainer: {
    flexDirection: 'row',
    gap: SPACING.space_5,
    alignItems: 'center',
  },

  category: {
    fontSize: FONT_SIZE.size_14,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryPurple,
    padding: SPACING.space_5,
    backgroundColor: COLORS.primaryLightPurple,
    borderRadius: BORDER_RADIUS.radius_3,
  },

  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_3,
  },

  address: {
    fontSize: FONT_SIZE.size_17,
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryGray,
  },

  image: {
    width: '100%',
    height: 300,
  },

  divider: {
    borderWidth: 0.4,
    borderColor: COLORS.primaryGray,
    marginVertical: SPACING.space_20,
  },

  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.space_15,
  },

  messageButton: {
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryWhite,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primaryPurple,
    borderRadius: 30,
  },

  message: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryPurple,
  },

  bookingButton: {
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryPurple,
    width: '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.primaryPurple,
    borderRadius: 30,
  },

  booking: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_18,
    color: COLORS.primaryWhite,
  },
})
