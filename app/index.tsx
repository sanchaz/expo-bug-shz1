import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

const Index = () => {
  return (
    <View>
      <Text style={{ marginTop: 100 }}>Start Here</Text>
      <Pressable onPress={() => router.push('/(tabs)/somewhere')} style={{ marginTop: 200 }}>
        <Text style={{ fontSize: 30 }}>Press Here</Text>
      </Pressable>
    </View>
  )
}

export default Index