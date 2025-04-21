import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { useAssets } from 'expo-asset';
import { Video } from 'expo-av';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const index = () => {

    const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);

  return (
    <View style={styles.container}>
     <Image
                  source={require('../assets/images/logo.png')} // Adjust the path to your logo
                  style={styles.container}
                  resizeMode="contain"
                />


      <View style={styles.buttons}>
        <Link href={'/Connect wallet'} style={[defaultStyles.pillButton,{flex:1, backgroundColor: Colors.lightGray}]} asChild>
        
        <TouchableOpacity>
            <Text style={{ color: 'black', fontSize:22, fontWeight:'500'}}>
              <Image 
              source={require('../assets/images/google.png')}
              style={styles.buttonIcon}
              resizeMode='contain'/>
              </Text>
        </TouchableOpacity>
      </Link>

      <Link href={'/Connect wallet'} style={[defaultStyles.pillButton,{flex:1, backgroundColor: Colors.dark}]} asChild>
        
        <TouchableOpacity>
            <Text style={{ color: 'black', fontSize:20, fontWeight:'500', }}>
            <Image 
            source={require('../assets/images/wallet.png')}
            style={styles.buttonIcon}
            resizeMode='contain'/>
            </Text>
        </TouchableOpacity>
      </Link>
      </View>

    </View>



  );
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
      },
  
    pillButton:{
     padding:10,
     height:60,
     borderRadius:40,
     justifyContent:'center',
     alignItems:'center',
    },
    buttonIcon: {
      width: 24,
      height: 24,
      marginRight: 10, // Space between icon and text
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        gap:'20',
        marginBottom: 60,
        paddingHorizontal:20,
    }
});


export default index;