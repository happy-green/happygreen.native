import React from 'react';
import {createAppContainer,createStackNavigator,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'

import {AsyncStorage} from 'react-native';

import RegisterView from './views/view.register'
import HomePage from './views/view.dashboard';
import Profile  from './views/view.profile';
import Settings from './views/views.settings';
import Notifications from './views/view.notifications';
import Search from './views/view.search';

const HomeNavigator = createStackNavigator({
  Home:{
    screen:HomePage,
    navigationOptions:{
      title:"Happy Green 🌴"
    }
  },

  // Home subroutes
},
{
  initialRouteName:'Home'
});

const ProfileNavigator = createStackNavigator({
  Profile:{
    screen:Profile,
  },
  Settings:{
    screen:Settings,
    navigationOptions:{
      title:"Settings ⚙️"
    }
  }

  // Profile sub routes
})

const MainTabNavigator = createBottomTabNavigator({
  Home:{
    screen:HomeNavigator,
    navigationOptions:{
      tabBarLabel:"Home",
      tabBarIcon:({tintColor})=>(<Icon name="home" color={tintColor} size={25}/>),
      showIcon:true,
      
    }
  },
  Search:{
    screen:Search,
    navigationOptions:{
      tabBarLabel:"Search",
      tabBarIcon:({tintColor})=>(<Icon name="search" color={tintColor} size={25}/>)
    }
  },
  Notifications:{
    screen:Notifications,
    navigationOptions:{
      tabBarLabel:"Notification",
      tabBarIcon:({tintColor})=>(<Icon name="bell" color={tintColor} size={25}/>)
    }
  },
  Profile:{
    screen:ProfileNavigator,
    navigationOptions:{
      tabBarLabel:"Profile",
      tabBarIcon:({tintColor})=>(<Icon name="user" color={tintColor} size={25}/>),

    }
  },
},{
  defaultNavigationOptions:{
    tabBarOptions:{
      showLabel:false
    }
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Auth:RegisterView,
  Dashboard:MainTabNavigator
},{
  initialRouteName:'Auth'
})

export default createAppContainer(AppSwitchNavigator);
