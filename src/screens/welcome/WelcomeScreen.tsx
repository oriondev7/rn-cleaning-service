import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './welcome.styles'
import { ScreenName } from '../../constants'

export const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/sign_in.png')}
        style={styles.image}
      />

      {/* If you remove this view and use only 
      the second one the background and the button layout will get cut. 
      So you need to use this extra container. */}
      <View style={styles.subContainer}>
        <View style={styles.subContainerContent}>
          <Text style={styles.title}>
            Let's Find
            <Text style={styles.innerTitle}>
              {' '}
              Professional Cleaning and Repair{' '}
            </Text>
          </Text>
          <Text style={styles.title}>Services</Text>

          <Text style={styles.subTitle}>
            Best App to find services near you which deliver you a professional
            services
          </Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate(ScreenName.tabBar)
            }}
          >
            <Text style={styles.buttonTitle}>Let's Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
