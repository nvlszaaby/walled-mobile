import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>r
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="(home)" options={{headerShown: false}} />
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="register" options={{headerShown: false}} />
      <Stack.Screen name="tnc" options={{presentation: 'modal'}} />
    </Stack>
  );
}
