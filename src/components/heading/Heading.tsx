import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './heading.styles'

interface HeadingProps {
  title: string
  hasViewAll?: boolean
  isViewAll?: boolean
  onViewAll?: () => void
}

export const Heading: React.FC<HeadingProps> = ({ 
  title,
  hasViewAll = false,
  isViewAll = false,
  onViewAll = () => {}
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      {hasViewAll &&
        <TouchableOpacity onPress={onViewAll} >
          <Text style={styles.viewAll}>{isViewAll ? 'View Less' : 'View All'}</Text>
        </TouchableOpacity>
      }
    </View>
  )
}
