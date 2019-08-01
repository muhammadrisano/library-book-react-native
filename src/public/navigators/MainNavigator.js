import { createDrawerNavigator,createStackNavigator, createAppContainer} from 'react-navigation'


import Home from '../../screens/home/Home'
import Profile from '../../screens/profile/Profile'
import Register from '../../screens/register/Register'
import Login from '../../screens/login/Login'
import Detailbook from '../../screens/detailbook/Detailbook'
const AppNavigator = createStackNavigator({
    Home,
    Profile,
    Register,
    Login,
    Detailbook
},{
    headerMode:'none',
    initialRouteName:'Home'
})

const DrawerNavigator = createDrawerNavigator(
    {
    Menu:{
        screen: AppNavigator,
    },
    Home,
    Login
  },
  {
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // contentComponent: SlideMenu,
    navigationOptions: {
      drawerLockMode: 'locked-closed',
    },
  }
  );

const AppDrawer = createAppContainer(DrawerNavigator)
export default createAppContainer(DrawerNavigator)