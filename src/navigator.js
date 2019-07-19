import React from 'react';
import {createAppContainer,createStackNavigator,
  createSwitchNavigator,createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome'


// Auth imports
import RegisterView from './views/auth/auth.register';
import AuthIndex from './views/auth/auth.index';
import LoginView from './views/auth/auth.login';

// Dashboard view
import HomePage from './views/dashboard/view.home';
import Profile  from './views/dashboard/view.profile';
import Settings from './views/dashboard/views.settings';
import Notifications from './views/dashboard/view.notifications';
import Search from './views/dashboard/view.search';
5
// Auth Navigator

const AuthNavigator = createStackNavigator({
  Index:{
    screen:AuthIndex,

  },
  Register:{
    screen:RegisterView,
    navigationOptions:{
     title:"Register" 
    }
  },
  Login:{
    screen:LoginView,
    navigationOptions:{
     title:"Login" 
    }
  }
},
{
  initialRouteName:"Index",
  defaultNavigationOptions:{
    gesturesEnabled:true,
    headerStyle:{
      backgroundColor:'transparent',
      shadowColor:'transparent',
      shadowRadius:0,
      shadowOffset:{
        height:0
      }
    }
  }
})

// Home Navigator
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
  Auth:AuthNavigator,
  Dashboard:MainTabNavigator
},{
  initialRouteName:'Auth'
})

export default createAppContainer(AppSwitchNavigator);
