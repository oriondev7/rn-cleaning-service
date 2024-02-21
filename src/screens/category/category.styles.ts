import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  flatList: {
    gap: SPACING.space_15,
    paddingHorizontal: SPACING.space_20,
  },

  noBusiness: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_20,
    textAlign: 'center',
    marginTop: '20%',
    color: COLORS.primaryGray,
  },
})
