import React, { useEffect, useState } from 'react'
import {
  Alert,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './booking_modal.styles'
import { BackButton, Heading } from '../../../components'
import CalendarPicker from 'react-native-calendar-picker'
import { COLORS } from '../../../constants/theme'
import GlobalAPI from '../../../utils/GlobalAPI'
import moment from 'moment'
import { User } from '../../../constants'
import { BookingModalProps } from './booking_modal.types'

export const BookingModal: React.FC<BookingModalProps> = ({
  businessId,
  closeModal,
}) => {
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [selectedTime, setSelectedTime] = useState('')
  const [note, setNote] = useState('')
  const [timeList, setTimeList] = useState<{}[]>([])
  const [bookingId, setBookingId] = useState('')
  const isPlatformIOS = Platform.OS === 'ios'
  const { user } = User

  const getTime = () => {
    const timeList = []

    for (let i = 8; i <= 1; i++) {
      timeList.push({
        time: i + ':00 AM',
      })
      timeList.push({
        time: i + ':30 AM',
      })
    }

    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM',
      })
      timeList.push({
        time: i + ':30 PM',
      })
    }

    setTimeList(timeList)
  }

  const onDateChange = (date: any) => {
    setSelectedDate(date)
  }

  useEffect(getTime, [])

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Error', 'Please select date and time')
      return
    }

    const data = {
      businessId: businessId,
      date: moment(selectedDate).format('DD-MMM-yyy'),
      time: selectedTime,
      userEmail: user.userEmail,
      userName: user.fullName(),
    }

    GlobalAPI.bookAppointment(data).then((response: any) => {
      setBookingId(response)

      GlobalAPI.publishBooking(response.createBooking.id).then(() => {
        Alert.alert('Success!', 'You have booked your appointment', [
          {
            text: 'Ok',
            onPress: () => {
              closeModal()
            },
          },
        ])
      })
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={isPlatformIOS ? 'padding' : 'height'}
      keyboardVerticalOffset={40}
      enabled={!isPlatformIOS}
    >
      <BackButton title="Booking" onPress={closeModal} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets
      >
        {/* Calendar Section */}
        <View style={styles.subContainer}>
          <Heading title="Select Date" />

          <View style={styles.calendarContainer}>
            <CalendarPicker
              onDateChange={onDateChange}
              width={Dimensions.get('window').width - 40}
              minDate={Date.now()}
              todayBackgroundColor={COLORS.primaryPurple}
              todayTextStyle={{ color: COLORS.primaryWhite }}
              selectedDayColor={COLORS.primaryBlack}
              selectedDayTextColor={COLORS.primaryWhite}
            />
          </View>

          {/* Time Select Section */}
          <View style={styles.timeContainer}>
            <Heading title="Select Time Slot" />

            <FlatList
              horizontal
              contentContainerStyle={styles.flatList}
              showsHorizontalScrollIndicator={false}
              data={timeList}
              keyExtractor={(_, index: number) => index.toString()}
              renderItem={({ item }: any) => (
                <TouchableOpacity
                  style={
                    item.time === selectedTime
                      ? styles.selectedTimeContainer
                      : styles.unselectedTimeContainer
                  }
                  onPress={() => setSelectedTime(item.time)}
                >
                  <Text
                    style={
                      item.time === selectedTime
                        ? styles.selectedTime
                        : styles.unselectedTime
                    }
                  >
                    {item.time}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Notes Section */}
          <View style={styles.noteSectionContainer}>
            <Heading title="Any Suggestion Note" />

            <View style={styles.noteContainer}>
              <TextInput
                style={styles.note}
                placeholder="Note"
                onChangeText={setNote}
                value={note}
                multiline
              />
            </View>
          </View>

          {/* Confirmation Button */}
          {/* // use confirmHelpContainer it to avoid catting the background color */}
          <View style={styles.confirmHelpContainer}>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={bookAppointment}
            >
              <Text style={styles.confirm}>Confirm & Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
