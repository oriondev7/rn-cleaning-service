import React, { useCallback, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './booking.styles'
import GlobalAPI from '../../utils/GlobalAPI'
import { User } from '../../constants'
import { BusinessListCard } from '../category/bl_card/BusinessListCard'
import { useFocusEffect } from '@react-navigation/native'

export const BookingScreen = () => {
  const [bookings, setBookings] = useState<any[]>([])
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { user } = User

  const getUserBookings = useCallback(() => {
    if (isRefreshing) {
      return
    }

    setIsRefreshing(true)

    GlobalAPI.getUserBookings(user.userEmail)
      .then((response: any) => {
        setBookings(response.bookings)
      })
      .finally(() => setIsRefreshing(false))
  }, [])

  useFocusEffect(getUserBookings)

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>My Booking</Text>
      </SafeAreaView>

      <FlatList
        contentContainerStyle={styles.flatList}
        onRefresh={getUserBookings}
        refreshing={isRefreshing}
        data={bookings}
        keyExtractor={(item: any) => item.id}
        ListHeaderComponent={
          bookings.length === 0 ? (
            <Text style={styles.noBookingsText}>You Have No Bookings</Text>
          ) : (
            <></>
          )
        }
        renderItem={({ item }: any) => (
          <BusinessListCard business={item.business} booking={item} />
        )}
      />
    </View>
  )
}
