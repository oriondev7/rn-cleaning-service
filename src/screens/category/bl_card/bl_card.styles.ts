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
    padding: SPACING.space_10,
    backgroundColor: COLORS.primaryWhite,
    borderRadius: BORDER_RADIUS.radius_15,
    flexDirection: 'row',
    gap: SPACING.space_10,
  },

  subContainer: {
    gap: SPACING.space_7,
    flex: 1,
  },

  personWithStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS.radius_15,
  },

  contactPerson: {
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryGray,
    fontSize: FONT_SIZE.size_15,
  },

  name: {
    fontFamily: FONT_FAMILY.outfit_bold,
    color: COLORS.primaryBlack,
    fontSize: FONT_SIZE.size_19,
  },

  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_3,
    paddingTop: SPACING.space_7,
  },

  address: {
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryGray,
    fontSize: FONT_SIZE.size_16,
  },

  bookingStatusContainer: {
    padding: SPACING.space_3,
    backgroundColor: COLORS.primaryLightPurple,
    borderRadius: BORDER_RADIUS.radius_3,
    alignSelf: 'flex-start',
    paddingHorizontal: SPACING.space_5,
  },

  bookingStatus: {
    fontSize: FONT_SIZE.size_14,
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryPurple,
  },
})
