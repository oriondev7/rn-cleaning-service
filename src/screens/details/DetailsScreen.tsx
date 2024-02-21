import React, { useEffect, useState } from 'react'
import {
  Image,
  Linking,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './details.styles'
import Location from '../../assets/icons/location.svg'
import { COLORS, FONT_SIZE } from '../../constants/theme'
import { Photos } from './photos/Photos'
import { AboutMe } from './about_me/AboutMe'
import { BookingModal } from './booking_modal/BookingModal'
import { BackButton } from '../../components'
import GlobalAPI from '../../utils/GlobalAPI'

export const DetailsScreen: React.FC = ({ navigation, route }: any) => {
  const [business, setBusiness] = useState<any>()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const imageURL = business?.images[0]?.url
  const onContactUs = () => {
    Linking.openURL(
      'mailto:' +
        business?.email +
        '?subject=I am looking for your Service&body=Hi There,'
    )
  }

  useEffect(() => {
    GlobalAPI.getBusinessById(route.params.id).then((response: any) => {
      setBusiness(response.businessLists[0])
    })
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton onPress={() => navigation.pop()} />

        {imageURL && <Image source={{ uri: imageURL }} style={styles.image} />}

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{business?.name}</Text>

          <View style={styles.infoSubContainer}>
            <Text style={styles.contactPerson}>
              {business?.contactPerson} 🌟{' '}
            </Text>
            <Text style={styles.category}>{business?.category.name}</Text>
          </View>

          <View style={styles.addressContainer}>
            <Location
              width={FONT_SIZE.size_25}
              height={FONT_SIZE.size_25}
              fill={COLORS.primaryPurple}
            />

            <Text style={styles.address}>{business?.address}</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* About */}
          <AboutMe description={business?.about} />

          {/* Divider */}
          <View style={styles.divider} />

          <Photos photos={business?.images} />
        </View>
      </ScrollView>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.messageButton} onPress={onContactUs}>
          <Text style={styles.message}>Message</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bookingButton}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={styles.booking}>Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Booking Modal Screen */}
      <Modal animationType="slide" visible={isModalVisible}>
        <BookingModal
          businessId={business?.id}
          closeModal={() => setIsModalVisible(false)}
        />
      </Modal>
    </View>
  )
}
