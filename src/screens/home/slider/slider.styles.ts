import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  SPACING,
} from '../../../constants/theme'

export const styles = StyleSheet.create({
  heading: {
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryBlack,
    marginBottom: SPACING.space_10,
  },

  image: {
    width: 270,
    height: 150,
    marginRight: SPACING.space_20,
    borderRadius: BORDER_RADIUS.radius_20,
  },
})
