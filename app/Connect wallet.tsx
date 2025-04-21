import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

const Page = () => {
    
  return (
<View style={defaultStyles.container}>
  <Text style={defaultStyles.header}>Let's get started!</Text>
  <Text style={defaultStyles.descriptionText}>Enter your wallet Address</Text>



<View style={styles.inputContainer}>
  < TextInput
  style={styles.input}
  placeholder='Wallet Address'
  placeholderTextColor={Colors.gray}
  keyboardType='numeric'
  value={''}
       />
</View>
<Link href={'/Connect wallet'} replace asChild>
<TouchableOpacity>
  <Text style={ defaultStyles.textLink}>Don't have a wallet? Log in</Text>
</TouchableOpacity>

</Link>
</View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    marginVertical:40,
    flexDirection:'row',
  },
  
input: {
padding: 20,
borderRadius:16,
fontSize:20,
backgroundColor: Colors.lightGray,
marginLeft:10,
},
});

export default Page;