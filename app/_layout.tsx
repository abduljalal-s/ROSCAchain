import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Splash Screen (index.tsx) */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hide the header for the splash screen
        }}
      />
      {/* Login Screen (to be created as login.tsx) */}
      <Stack.Screen
        name="Connect Wallet"
        options={{
          headerShown: true // Hide the header for the login screen
        }}
      />
    </Stack>
  );
}