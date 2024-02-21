import { Platform, StyleSheet } from "react-native";
import { COLORS, FONT_FAMILY, FONT_SIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_20,
    paddingBottom: SPACING.space_15,
    paddingTop: Platform.OS === 'android' ? SPACING.space_40 : SPACING.space_20,
  },

  flatList: {
    gap: SPACING.space_15
  },

  title: {
    fontFamily: FONT_FAMILY.outfit_medium,
    fontSize: FONT_SIZE.size_25,
    color: COLORS.primaryBlack,
    paddingBottom: SPACING.space_15
  }
})
