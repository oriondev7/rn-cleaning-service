import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './home.styles'
import { Header } from './header/Header'
import { Slider } from './slider/Slider'
import { Categories } from './categories/Categories'
import { BusinessList } from './business_list/BusinessList'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      <ScrollView style={styles.subContainer}>
        {/* Slider */}
        <Slider />

        {/* Categories */}
        <Categories />

        {/* BusinessList */}
        <BusinessList />
      </ScrollView>
    </View>
  )
}

