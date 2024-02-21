import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { styles } from './business_list.styles'
import GlobalAPI from '../../../utils/GlobalAPI'
import { Heading } from '../../../components'
import { BLSmallCard } from '../bl_small_card/BLSmallCard'
import { SPACING } from '../../../constants/theme'

export const BusinessList: React.FC = () => {
  const [businessList, setBusinessList] = useState([])

  const getBusinessList = () => {
    GlobalAPI.getBusinessList().then((response: any) => {
      setBusinessList(response?.businessLists)
    })
  }

  useEffect(getBusinessList, [])

  return (
    <View style={styles.container}>
      <Heading
        title="Latest Business"
        hasViewAll={true}
        isViewAll={false}
        onViewAll={() => {}}
      />

      <FlatList
        horizontal
        data={businessList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: SPACING.space_10 }}
        keyExtractor={(item: any) => item?.id}
        renderItem={({ item }: any) => (
          <View>
            <BLSmallCard business={item} />
          </View>
        )}
      />
    </View>
  )
}
