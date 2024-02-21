import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.outfit_medium,
    color: COLORS.primaryBlack,
    marginBottom: SPACING.space_10,
  },

  viewAll: {
    color: COLORS.primaryPurple,
  },
})
