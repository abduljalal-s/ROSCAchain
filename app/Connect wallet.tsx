import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const WalletConnectLogin = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const router = useRouter();

  const onConnect = async () => {
    try {
      // Placeholder for wallet connection logic
      // This would typically involve Web3.js or ethers.js to connect to a wallet provider
      console.log('Connecting wallet with address:', walletAddress);
      // Add actual wallet connection logic here
      router.push('/Home'); // Redirect to home page after successful connection
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Connect Your Wallet!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter your wallet address to login
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Wallet address (e.g., 0x...)"
            placeholderTextColor={Colors.gray}
            keyboardType="default"
            value={walletAddress}
            onChangeText={setWalletAddress}
          />
        </View>

        <Link href={'/'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Don't have a wallet? Create one.</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            walletAddress !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onConnect}>
          <Text style={defaultStyles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default WalletConnectLogin;