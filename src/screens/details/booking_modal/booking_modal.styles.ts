import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../../constants/theme'

export const styles = StyleSheet.create({
  subContainer: {
    paddingTop: SPACING.space_15,
    paddingHorizontal: SPACING.space_20,
  },

  calendarContainer: {
    backgroundColor: COLORS.primaryLightPurple,
    padding: SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_15,
  },

  flatList: {
    gap: 5,
    paddingTop: 10,
  },

  timeContainer: {
    marginTop: SPACING.space_20,
  },

  selectedTimeContainer: {
    padding: SPACING.space_10,
    paddingHorizontal: SPACING.space_18,
    borderWidth: 1,
    borderColor: COLORS.primaryPurple,
    borderRadius: BORDER_RADIUS.radius_30,
    backgroundColor: COLORS.primaryPurple,
  },

  unselectedTimeContainer: {
    padding: SPACING.space_10,
    paddingHorizontal: SPACING.space_18,
    borderWidth: 1,
    borderColor: COLORS.primaryPurple,
    borderRadius: BORDER_RADIUS.radius_30,
  },

  selectedTime: {
    color: COLORS.primaryWhite,
    fontFamily: FONT_FAMILY.outfit_regular,
    fontSize: FONT_SIZE.size_14,
  },

  unselectedTime: {
    color: COLORS.primaryPurple,
    fontFamily: FONT_FAMILY.outfit_regular,
    fontSize: FONT_SIZE.size_14,
  },

  noteSectionContainer: {
    paddingTop: SPACING.space_20,
    paddingBottom: SPACING.space_10,
  },

  noteContainer: {
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.radius_15,
    borderColor: COLORS.primaryPurple,
    padding: SPACING.space_10,
    fontSize: FONT_SIZE.size_16,
    fontFamily: FONT_FAMILY.outfit_regular,
  },

  note: {
    textAlignVertical: 'top',
    padding: 0,
    height: 100,
  },

  confirmHelpContainer: {
    paddingTop: 1, // use it to avoid catting the background color
  },

  confirmButton: {
    backgroundColor: COLORS.primaryPurple,
    padding: SPACING.space_13,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS.radius_30,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  confirm: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_17,
    color: COLORS.primaryWhite,
  },
})
