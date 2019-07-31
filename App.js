import React, {Component} from 'react'
import {

  View,
  Text,

} from 'react-native';
import MainNavigator from './src/public/navigators/MainNavigator'

class App extends Component{
  render()
  {
    return(
      <MainNavigator />
    )
  }
}



export default App;
