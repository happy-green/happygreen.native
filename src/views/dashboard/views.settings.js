import React,{useState} from 'react';
import {View,Text,AsyncStorage,Button,StyleSheet} from 'react-native';

const Settings = ({navigation}) => {

  const LogOut = () => {
    return navigation.navigate('Auth');
  }

  return(
    <View>
      <Button title="Sign out" onPress={LogOut} />
    </View>
  )
}


export default Settings;