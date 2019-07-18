import React,{useState,useEffect} from 'react';
import { View,Text,AsyncStorage,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import axios from 'axios';
import config from '../config.json';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Profile = ({navigation}) => {

  const[profileData,setProfileData] = useState({});

  // fetch from api

  useEffect(()=>{
    fetchProfileData()
    .then(data=>{
      setProfileData(data.profile);
    })
    .catch(err=>{
      // alert(err);
    })
  },[])

  const fetchProfileData = async () => {
    const token = await AsyncStorage.getItem('auth-token');
    console.log(token)
    const apiData = await axios.get(`${config.serverIp}/user/`,{
      headers:{
        'x-auth-token':token
      }
    })

    return apiData.data;
  }

  return(
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content"/>
      <Text>{profileData.Bio}</Text>
      <Text>{profileData.FullName}</Text>
    </View>
  )
}

Profile.navigationOptions = ({navigation})=> ({
  title:"Profile 👤",
  headerRight:(
    <TouchableOpacity>
      <Icon name="cog" size={25} color={'black'} style={{paddingRight:10}} onPress={(e)=> (navigation.navigate('Settings'))}/>
    </TouchableOpacity>
  )
})

export default Profile;