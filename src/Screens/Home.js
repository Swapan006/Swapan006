import { View, Text} from 'react-native'
import React from 'react'
import { styles } from '../style/styles'

export default function Home({navigation}) {
  return (
    <View style={styles.buttonView}>
      <Text style={styles.textView} onPress={()=> navigation.navigate('Albums List')}>Album App</Text>
    </View>
  )
}              