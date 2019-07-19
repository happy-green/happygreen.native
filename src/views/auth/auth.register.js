import React,{ useState, useEffect } from 'react';
import {View,Text,Button,
  StyleSheet,StatusBar,TextInput,
  KeyboardAvoidingView,TouchableOpacity,TouchableWithoutFeedback,
  Keyboard,AsyncStorage} from 'react-native';

import config from '../../config.json';
import axios from 'axios';

const Register = ({navigation}) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [confirmPass,setConfirm] = useState("");


  const setStorage = async (key,value) => {
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      // errr
    }
  }

  const SubmitForm = ()=>{


    if(!(email || password || username || confirmPass)){
      return alert("All fields are required");
    }


    if(password !== confirmPass){
      return alert("Passwords dont match");
    }

    axios.post(`${config.serverIp}/auth/register`,{Email:email,Password:password,UserName:username})
    .then(userData=>{
      const token = userData.data.token;
      setStorage('auth-token',token)
      .then(done=>{
        return navigation.navigate('Dashboard')
      })
      .catch(err=>{
        alert(err.message);
      })
    })
    .catch(err=>{
      alert(err.message);
    })
  }
  return(
    <View style={RegisterView.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content"></StatusBar>
      <KeyboardAvoidingView style={RegisterView.container}>
        <TouchableWithoutFeedback style={RegisterView.container} onPress={Keyboard.dismiss}>
          <View style={RegisterView.InputView}>
            
            <TextInput placeholder="Username" 
              style={RegisterView.InputField} 
              keyboardType="default" 
              placeholderTextColor="black" 
              autoCorrect={false} 
              onChangeText={(username)=>setUsername(username)}/>
            
            <TextInput placeholder="Email" 
              style={RegisterView.InputField} 
              keyboardType="email-address" 
              placeholderTextColor="black" 
              autoCorrect={false} 
              onChangeText={(email)=>setEmail(email)}/>
            
            <TextInput placeholder="Password" 
                style={RegisterView.InputField}
                keyboardType="default" secureTextEntry 
                placeholderTextColor="black" 
                autoCorrect={false} 
                onChangeText={(password)=>setPassword(password)}/>
                        
            <TextInput placeholder="Confirm password" 
                style={RegisterView.InputField}
                keyboardType="default" secureTextEntry 
                placeholderTextColor="black" 
                autoCorrect={false} 
                onChangeText={(confirmPassword)=>setConfirm(confirmPassword)}/>
            
            <TouchableOpacity style={RegisterView.InputButton} onPress={()=>SubmitForm()}>
              <Text style={{color:'white',fontSize:18,fontWeight:'normal'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}





const RegisterView  = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  TitleView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  Title:{
    position:'absolute',
    top:'70%',
    fontSize:36,
    fontWeight:'bold',
    color:'black'
  },
  InputView:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    // backgroundColor:'blue'
  },
  InputField:{
    paddingHorizontal:10,
    width:'90%',
    height:50,
    backgroundColor:'whitesmoke',
    marginBottom:3,
    borderColor:'gray',
    // borderWidth:0.4
  },

  InputButton:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    marginTop:5,
    backgroundColor:'#27aa80'
  },
  InfoContainer:{
    left:0,
    right:0,
    bottom:0,
    position:'absolute',
    padding:20
  },
  SocialMediaAuth:{
    display:'flex',
    flexDirection:'row',
    // flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  SocialMediaIcon:{
    width:50,
    height:50,
    backgroundColor:'blue',
    margin:4,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
    // flex:1
  }
})

export default Register;