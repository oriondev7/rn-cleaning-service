import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './category.styles'
import GlobalAPI from '../../utils/GlobalAPI'
import { BusinessListCard } from './bl_card/BusinessListCard'
import { BackButton } from '../../components'

export const CategoryScreen: React.FC = ({ navigation, route }: any) => {
  const category = route.params.category
  const [businessList, setBusinessList] = useState([])

  const getBusinessListByCategory = () => {
    GlobalAPI.getBusinessListByCategory(category).then((response: any) => {
      setBusinessList(response.businessLists)
    })
  }

  useEffect(() => {
    category && getBusinessListByCategory()
  }, [category])

  return (
    <View style={styles.container}>
      <BackButton title={category} onPress={() => navigation.pop()} />

      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          keyExtractor={(item: any) => item?.id}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }: any) => <BusinessListCard business={item} />}
        />
      ) : (
        <Text style={styles.noBusiness}>No Business Found</Text>
      )}
    </View>
  )
}
