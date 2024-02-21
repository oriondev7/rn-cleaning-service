import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from '../../../constants/theme'

export const styles = StyleSheet.create({
  about: {
    fontSize: FONT_SIZE.size_16,
    fontFamily: FONT_FAMILY.outfit_regular,
    color: COLORS.primaryGray,
    textAlign: 'justify',
    lineHeight: 28,
  },

  showMore: {
    color: COLORS.primaryPurple,
    fontSize: FONT_SIZE.size_16,
    fontFamily: FONT_FAMILY.outfit_regular,
  },
})
