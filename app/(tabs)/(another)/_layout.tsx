import { router, Stack } from 'expo-router';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';



const Anotherlayout = () => {
  return (
    <Stack>
      <Stack.Screen name='one' options={{
        headerShown: true,
        headerLeft: () => (
          <Pressable onPress={() => { console.log('one try Left');}} style={{ padding: 10, backgroundColor: 'transparent' }}>
            <Text>Try Me</Text>
          </Pressable>
        ),
        headerRight: () => (
          <Pressable onPress={() => { console.log('one try Right');}} style={{ padding: 10, backgroundColor: 'red' }}>
            <Text>Try Me</Text>
          </Pressable>
        ),
      }}
      />
      <Stack.Screen name='two' options={{
        headerShown: true,
        headerLeft: () => (
          <Pressable onPress={() => { console.log('two try Left');}} style={{ padding: 10, backgroundColor: 'transparent' }}>
            <Text>Try Me</Text>
          </Pressable>
        ),
        headerRight: () => (
          <Pressable onPress={() => { console.log('two try Right');}} style={{ padding: 200, backgroundColor: 'red' }}>
            <Text>Try Me</Text>
          </Pressable>
        ),
      }}
      />
    </Stack>
  )
}

export default Anotherlayout;