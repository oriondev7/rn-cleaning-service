import React, { useEffect, useState } from 'react'
import { Alert, Dimensions, FlatList, Keyboard, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './booking_modal.styles'
import { BackButton, Heading } from '../../../components'
import CalendarPicker from "react-native-calendar-picker";
import { COLORS } from '../../../theme/theme';
import GlobalAPI from '../../../utils/GlobalAPI';
import moment from 'moment';
import { User } from '../../../constants';

interface BookingModalProps {
  businessId: string
  closeModal: () => void
}

export const BookingModal: React.FC<BookingModalProps> = ({
  businessId,
  closeModal
}) => {
  const [selectedDate, setSelectedDate] = useState(undefined)
  const [selectedTime, setSelectedTime] = useState('')
  const [note, setNote] = useState('')
  const [timeList, setTimeList] = useState<{}[]>([])
  const [height, setHeight] = useState(0)
  const [bookingId, setBookingId] = useState('')
  const { user, isLoading } = User

  Keyboard.addListener('keyboardWillShow', () => {
    setHeight(450)
    console.log(height);
  })

  Keyboard.addListener('keyboardWillHide', () => {
    setHeight(0)
    console.log(height);
  })

  const getTime = () => {
    const timeList = []

    for(let i = 8; i <= 1; i++) {
      timeList.push({
        time: i + ':00 AM'
      })
      timeList.push({
        time: i + ':30 AM'
      })
    }

    for(let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM'
      })
      timeList.push({
        time: i + ':30 PM'
      })
    }

    setTimeList(timeList)
  }

  const onDateChange = (date: any) => {
    console.log(date)
    setSelectedDate(date)
  }

  useEffect(getTime, [])

  const [coordinate, setCoordinate] = useState(0)
  const ref = React.useRef(0);
const openItem = () => {
  if (Platform.OS === 'ios') {
   ref.current.scrollTo({x: 0, y: coordinate / 3})
  }
}

  const bookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert(
        'Error',
        'Please select date and time'
      )
      return
    }

    const data = {
      businessId: businessId,
      date: moment(selectedDate).format('DD-MMM-yyy'),
      time: selectedTime,
      userEmail: user.userEmail,
      userName: user.fullName()
    }

    GlobalAPI.bookAppointment(data).then((response: any) => {
      setBookingId(response)
      console.log(response.createBooking.id);
      console.log(bookingId);
      GlobalAPI.publishBooking(response.createBooking.id).then((response: any) => {
        Alert.alert(
          'Success!',
          'You have booked your appointment',
        [{
          text: 'Ok',
          onPress: () => {
            closeModal()
          },
        }]
        )
      })
    })
  }

  return (
    <View style={{flex: Platform.OS === 'ios' ? 0 : 1}}>
      <BackButton 
        title='Booking'
        onPress={closeModal}
      />
      <ScrollView style={{flex: Platform.OS === 'ios' ? 0 : 1}} showsVerticalScrollIndicator={false} ref={ref}>
      
      {/* Calendar Section */}
      <View style={styles.subContainer}>
        <Heading title='Select Date' />

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
          <Heading title='Select Time Slot' />

          <FlatList
            horizontal
            contentContainerStyle={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={timeList}
            keyExtractor={(_, index: number) => index.toString()}
            renderItem={({ item }: any) => 
              <TouchableOpacity
                style={
                  item.time === selectedTime
                  ? styles.selectedTimeContainer
                  : styles.unselectedTimeContainer
                }
                onPress={() => setSelectedTime(item.time)}
              >
                <Text style={
                  item.time === selectedTime
                  ? styles.selectedTime
                  : styles.unselectedTime
                }>
                  {item.time}
                </Text>
              </TouchableOpacity>
            }
          />
        </View>

        {/* Notes Section */}
        <View style={styles.noteSectionContainer}>
          <Heading title='Any Suggestion Note' />

          <View style={styles.noteContainer}>
            <TextInput
              style={styles.note}         
              placeholder='Note'
              onChangeText={setNote}
              value={note}
              returnKeyLabel='asds'
              multiline
              onPressOut={openItem}
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

      <View
        style={{height: height}}
        onLayout={(event) => {
          
                       const layoutY = event.nativeEvent.layout.y;
                       console.log(coordinate);
          console.log(layoutY);
                       if (layoutY !== coordinate) {
                       setCoordinate(layoutY)
                       console.log(layoutY);
                       }
                     }}      
      />
      </ScrollView>
    </View>
  )
}
