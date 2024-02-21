import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../constants/theme'

export const styles = StyleSheet.create({
  label: {
    fontSize: FONT_SIZE.size_12,
    marginTop: -7,
  },

  focusedLabel: {
    color: COLORS.primaryBlack,
  },

  unfocusedLabel: {
    color: COLORS.primaryGray,
  },

  icon: {
    width: FONT_SIZE.size_25,
    height: FONT_SIZE.size_25,
    resizeMode: 'contain',
  },
})
