import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { styles } from './slider.styles'
import GlobalAPI from '../../../utils/GlobalAPI'
import { Heading } from '../../../components'
 
export const Slider: React.FC = () => {
  const [sliders, setSliders] = useState([])

  const getSliders = () => {
    GlobalAPI.getSlider()
      .then((response: any) => {
        setSliders(response?.sliders)
      })
  }

  useEffect(() => {
    getSliders()
  }, [])

  return (
    <View>
      <Heading title='Offers For You' />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={sliders}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }: any) => 
          <Image
            source={{ uri: item?.image?.url }}
            style={styles.image}
          />
        }
      />
    </View>
  )
}
