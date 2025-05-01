import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Link, router, Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function RootLayout() {
  return (


    <Stack>
          <Stack.Screen name='index' options={{headerShown: false}} />
          
    <Stack.Screen
    name="login"
    options={{
      title: '',
      headerBackTitle: '',
      headerShadowVisible: false,
      headerStyle: { backgroundColor: Colors.background },
      headerLeft: () => (
        <TouchableOpacity onPress={router.back}>
          <Ionicons name="arrow-back" size={34} color={Colors.dark} />
        </TouchableOpacity>
      ),
  
    }}
  />

    </Stack>

  );
}
