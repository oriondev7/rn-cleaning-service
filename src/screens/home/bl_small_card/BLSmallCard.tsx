import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './bl_small_card.styles'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../../../constants'
import { BLSmallCardProps } from './bl_small_card.types'

export const BLSmallCard: React.FC<BLSmallCardProps> = ({ business }) => {
  const navigation: any = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.details, {
          id: business.id,
        })
      }
    >
      <Image source={{ uri: business.images[0]?.url }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{business.name}</Text>
        <Text style={styles.contactPerson}>{business.contactPerson}</Text>

        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{business.category.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
