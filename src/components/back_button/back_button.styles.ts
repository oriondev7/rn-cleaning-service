import { Platform, StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.space_20,
    paddingBottom: SPACING.space_15,
    paddingTop: Platform.OS === 'android' ? SPACING.space_40 : SPACING.space_20,
    zIndex: 1,
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.space_10,
  },

  button: {
    backgroundColor: COLORS.primaryLightPurple,
    borderRadius: BORDER_RADIUS.radius_3,
  },

  title: {
    fontSize: FONT_SIZE.size_25,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryBlack,
  },
})
