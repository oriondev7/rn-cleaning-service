import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './categories.styles'
import GlobalAPI from '../../../utils/GlobalAPI'
import { Heading } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../../../constants'

export const Categories: React.FC = () => {
  const [categories, setCategories] = useState([])
  const [isViewAll, setIsViewAll] = useState(false)
  const navigation: any = useNavigation()

  // Get Categories List
  const getCategories = () => {
    GlobalAPI.getCategories().then((response: any) => {
      setCategories(response?.categories)
    })
  }

  const onViewAll = () => setIsViewAll(!isViewAll)

  useEffect(getCategories, [])

  return (
    <View style={styles.container}>
      <Heading
        title="Categories"
        hasViewAll={true}
        isViewAll={isViewAll}
        onViewAll={onViewAll}
      />

      <FlatList
        numColumns={4}
        data={categories}
        scrollEnabled={false}
        keyExtractor={(item: any) => item?.id}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item, index }) => {
          return (
            <>
              {isViewAll ? (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() =>
                    navigation.push(ScreenName.category, {
                      category: item?.name,
                    })
                  }
                >
                  <View style={styles.imageSubContainer}>
                    <Image
                      source={{ uri: item?.icon?.url }}
                      style={styles.image}
                    />
                  </View>

                  <Text style={styles.title}>{item?.name}</Text>
                </TouchableOpacity>
              ) : (
                <>
                  {index <= 3 && (
                    <TouchableOpacity
                      style={styles.imageContainer}
                      onPress={() =>
                        navigation.push(ScreenName.category, {
                          category: item?.name,
                        })
                      }
                    >
                      <View style={styles.imageSubContainer}>
                        <Image
                          source={{ uri: item?.icon?.url }}
                          style={styles.image}
                        />
                      </View>

                      <Text style={styles.title}>{item?.name}</Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </>
          )
        }}
      />
    </View>
  )
}
