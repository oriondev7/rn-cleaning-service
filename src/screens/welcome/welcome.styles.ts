import { StyleSheet } from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  SPACING,
} from '../../constants/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  image: {
    width: 230,
    height: 450,
    resizeMode: 'contain',
    marginTop: SPACING.space_70,
  },

  // If you remove the view that uses this style and use only
  // the second one the background and the button layout will get cut.
  // So you need to use this extra style for the extra container.
  subContainer: {
    height: '40%',
    width: '100%',
    paddingTop: 5,
    position: 'absolute',
    bottom: 0,
  },

  subContainerContent: {
    flex: 1,
    backgroundColor: COLORS.primaryPurple,
    borderTopLeftRadius: BORDER_RADIUS.radius_30,
    borderTopRightRadius: BORDER_RADIUS.radius_30,
    padding: SPACING.space_20,
  },

  title: {
    color: COLORS.primaryWhite,
    fontSize: FONT_SIZE.size_27,
    textAlign: 'center',
  },

  innerTitle: {
    fontWeight: 'bold',
  },

  subTitle: {
    color: COLORS.primaryWhite,
    fontSize: FONT_SIZE.size_17,
    textAlign: 'center',
    marginTop: SPACING.space_20,
  },

  buttonContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDER_RADIUS.radius_30,
    backgroundColor: COLORS.primaryWhite,
    marginTop: SPACING.space_40,
    alignItems: 'center',
  },

  buttonTitle: {
    fontSize: FONT_SIZE.size_17,
    color: COLORS.primaryPurple,
  },
})
