import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router';

const One = () => {
  return (
    <View>
      <Pressable onPress={() => router.push('/(tabs)/(another)/two')}>
        <Text>GOTO TWO</Text>
      </Pressable>
    </View>
  )
}

export default One;