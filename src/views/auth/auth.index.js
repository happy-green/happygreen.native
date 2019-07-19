import React,{useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';

const AuthIndex = ({navigation})=>{

  // check for token

  useEffect(()=>{
    if(validAuthToken){
      navigation.navigate('Dashboard');
    }
  },[])

  const validAuthToken = async ()=>{
    const token = await AsyncStorage.getItem('auth-token');
    if(!token) return false;

    return true;
  }
  return(
    <View style={AuthStyles.container}>
      <View style={AuthStyles.TitleView}>
        <Text style={AuthStyles.Title}>Happy Green 🌴</Text>
      </View>
      <View style={AuthStyles.ButtonsContainer}>
        
        <TouchableOpacity style={AuthStyles.InputButton} 
          onPress={(e)=>(navigation.navigate('Register'))}>
          <Text style={{color:'white',fontSize:15,fontWeight:'normal'}}>Create an account</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={AuthStyles.InputButton} 
          onPress={(e)=>(navigation.navigate('Login'))}>  
          <Text style={{color:'white',fontSize:15,fontWeight:'normal'}}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const AuthStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  TitleView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  Title:{
    fontSize:30,
    fontWeight:'bold',
    color:'black'
  },

  ButtonsContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  InputButton:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    height:50,
    marginTop:5,
    backgroundColor:'#27aa80',
    borderRadius:100
  },
})


export default AuthIndex