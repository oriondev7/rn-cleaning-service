import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './bl_card.styles'
import Location from '../../../assets/icons/location.svg'
import Calendar from '../../../assets/icons/calendar.svg'
import { COLORS, FONT_SIZE } from '../../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { ScreenName } from '../../../constants'
import { BusinessListCardProps } from './bl_card.types'

export const BusinessListCard: React.FC<BusinessListCardProps> = ({
  business,
  booking,
}) => {
  const navigation: any = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.details, {
          id: business?.id,
        })
      }
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />

      <View style={styles.subContainer}>
        <View style={styles.personWithStatusContainer}>
          <Text style={styles.contactPerson}>{business?.contactPerson}</Text>

          {booking && (
            <View style={styles.bookingStatusContainer}>
              <Text style={styles.bookingStatus}>{booking?.bookingStatus}</Text>
            </View>
          )}
        </View>

        <Text style={styles.name}>{business?.name}</Text>

        {booking ? (
          <View style={styles.addressContainer}>
            <Calendar
              width={FONT_SIZE.size_20}
              height={FONT_SIZE.size_20}
              fill={COLORS.primaryPurple}
            />

            <Text style={styles.address}>
              {booking?.date} at {booking?.time}
            </Text>
          </View>
        ) : (
          <View style={styles.addressContainer}>
            <Location
              width={FONT_SIZE.size_20}
              height={FONT_SIZE.size_20}
              fill={COLORS.primaryPurple}
            />

            <Text style={styles.address}>{business?.address}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}
