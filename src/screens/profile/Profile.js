import React, {Component} from 'react';

import {Button, Alert} from 'react-native'
import { Card, CardItem, View, Text } from 'native-base'


class Profile extends Component{
    constructor(props){
        super(props)
        this.state ={
            counter:0,
            userid:this.props.navigation.getParam('userid')
        }
    }

    _alert(string){
        alert.alert(string)
        console.warn(string)
    }

    _counter(){
        this.setState({counter:this.state.counter++})
    }
    render(){
        return(
            <>
           <View style={{ marginHorizontal: 20 }}>
          <Card style={{ padding: 20 }}>
            <CardItem cardBody>
              <Text>Welcome to Profile! {this.state.userid}</Text>
            </CardItem>
          </Card>
        </View>
        <View>
          <Button onPress={() => this.props.navigation.goBack()} title='Back Button' />
        </View>
            </>
        )
    }

}

export default Profile;