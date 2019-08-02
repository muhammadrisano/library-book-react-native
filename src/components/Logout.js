import React, {Component} from 'react';

import {Button, Alert} from 'react-native'
import { Card, CardItem, View, Text } from 'native-base'


class Profile extends Component{
 
    componentWillMount() {
        this.props.logoutUser()
        NavigationActions.navigate({ routeName: someRouteName })
      }

}

export default Profile;