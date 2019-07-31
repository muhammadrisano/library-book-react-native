import React, {Component} from 'react';
import { Alert} from 'react-native'

import { Container, Header, Title, Button, Icon, Left, Right, Body, Content, Form, Item, Picker } from "native-base";
class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
    }
    _alert(string){
        Alert.alert(string)
        console.warn(string)
    }



    _counter(){
        this.setState({counter:this.state.counter++})
    }
    render(){
        return(
            <Container>
            <Header noShadow>
              <Left>
                <Button transparent>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Header No Shadow</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name="menu" />
                  <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue=""
              onValueChange=""
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
                </Button>
              </Right>
            </Header>
            
          </Container>

        )
    }

}

export default Home;