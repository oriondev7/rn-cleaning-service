import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_FAMILY,
  SPACING,
} from '../../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.space_10,
  },

  imageContainer: {
    alignItems: 'center',
  },

  imageSubContainer: {
    backgroundColor: COLORS.primaryLightGray,
    padding: SPACING.space_17,
    borderRadius: BORDER_RADIUS.radius_30,
  },

  image: {
    width: 30,
    height: 30,
  },

  title: {
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryBlack,
    marginTop: SPACING.space_5,
  },
})
