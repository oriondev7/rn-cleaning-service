import React from 'react'
import { FlatList, Image, View } from 'react-native'
import { styles } from './photos.styles'
import { Heading } from '../../../components'
import { SPACING } from '../../../constants/theme'
import { PhotosProps } from './photos.types'

export const Photos: React.FC<PhotosProps> = ({ photos }) => {
  return (
    <View>
      <Heading title="Photos" />

      <FlatList
        scrollEnabled={false}
        numColumns={2}
        columnWrapperStyle={{ gap: SPACING.space_7 }}
        contentContainerStyle={{ gap: SPACING.space_7 }}
        data={photos}
        keyExtractor={(_, index: number) => index.toString()}
        renderItem={({ item }: any) => (
          <Image source={{ uri: item.url }} style={styles.image} />
        )}
      />
    </View>
  )
}
