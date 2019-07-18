import {createAppContainer,createStackNavigator,createSwitchNavigator,createBottomTabNavigator} from 'react-navigation';
import RegisterView from './views/view.register'
import HomePage from './views/view.dashboard';

const DashboardNavigator = createStackNavigator({
  Home:HomePage
});


const AppSwitchNavigator = createSwitchNavigator({
  Auth:RegisterView,
  Dashboard:DashboardNavigator
},{
  initialRouteName:"Auth"
})

export default createAppContainer(AppSwitchNavigator);
