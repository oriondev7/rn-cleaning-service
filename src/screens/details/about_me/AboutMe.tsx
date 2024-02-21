import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './about_me.styles'
import { Heading } from '../../../components'
import { AboutMeProps } from './about_me.types'

export const AboutMe: React.FC<AboutMeProps> = ({ description }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <View>
      <Heading title="About Me" />

      <Text style={styles.about} numberOfLines={showMore ? 0 : 5}>
        {description}
      </Text>

      <TouchableOpacity onPress={() => setShowMore(!showMore)}>
        <Text style={styles.showMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
