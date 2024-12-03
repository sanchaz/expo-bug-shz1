import { View, Text, Pressable } from 'react-native'
import { router } from 'expo-router';

const Two = () => {
  return (
    <View>
      <Pressable onPress={() => router.push('/(tabs)/(another)/one')}>
        <Text>GOTO ONE</Text>
      </Pressable>
    </View>
  )
}

export default Two;