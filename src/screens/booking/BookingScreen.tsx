import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import { styles } from './booking.styles'
import GlobalAPI from '../../utils/GlobalAPI'
import { User } from '../../constants'
import { BusinessListCard } from '../category/bl_card/BusinessListCard'
// import { useIsFocused } from '@react-navigation/native'

export const BookingScreen = ({ navigation }: any) => {
  const [bookings, setBookings] = useState<{}[]>()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { user, isLoading } = User
  // const focused = useIsFocused()

  const getUserBookings = () => {
    setIsRefreshing(true)

    GlobalAPI.getUserBookings(user.userEmail).then((response: any) => {
      setBookings(response.bookings)

      setIsRefreshing(false)
    })
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserBookings()
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
    }, [navigation])

  return (
    <View style={styles.container}>
      <SafeAreaView >
        <Text style={styles.title}>My Booking</Text>
      </SafeAreaView>

      {/* <View> */}
        <FlatList
          contentContainerStyle={styles.flatList}
          onRefresh={getUserBookings}
          refreshing={isRefreshing}
          data={bookings}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }: any) =>
            <BusinessListCard 
              business={item.business}
              booking={item}
            />
          }
        />
      {/* </View> */}
    </View>
  )
}
