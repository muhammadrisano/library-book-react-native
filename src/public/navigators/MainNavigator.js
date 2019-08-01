import { createDrawerNavigator,createStackNavigator, createAppContainer} from 'react-navigation'


import Home from '../../screens/home/Home'
import Profile from '../../screens/profile/Profile'
import Register from '../../screens/register/Register'
import Login from '../../screens/login/Login'

const AppNavigator = createStackNavigator({
    Home,
    Profile,
    Register,
    Login
},{
    headerMode:'none',
    initialRouteName:'Home'
})

const DrawerNavigator = createDrawerNavigator({
    Home,
     Register
  });

export default createAppContainer(DrawerNavigator)