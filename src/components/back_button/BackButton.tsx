import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './back_button.styles'
import { useNavigation } from '@react-navigation/native'
import NavigationBack from '../../assets/icons/navigation_back.svg'
import { COLORS, FONT_SIZE } from '../../constants/theme'
import { BackButtonProps } from './back_button.types'

export const BackButton: React.FC<BackButtonProps> = ({ title, onPress }) => {
  const navigation: any = useNavigation()

  return (
    <View
      style={[
        styles.container,
        {
          position: title ? 'relative' : 'absolute',
        },
      ]}
    >
      <SafeAreaView>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <NavigationBack
              width={FONT_SIZE.size_30}
              height={FONT_SIZE.size_30}
              fill={COLORS.primaryPurple}
            />
          </TouchableOpacity>

          {title && <Text style={styles.title}>{title}</Text>}
        </View>
      </SafeAreaView>
    </View>
  )
}
