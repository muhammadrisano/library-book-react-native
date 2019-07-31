import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Body, Title,Right } from 'native-base';
import {TouchableOpacity} from 'react-native'
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Login Library</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <TouchableOpacity style={{marginTop:30, marginLeft:10} }><Text style={{color:'blue'}}>Have you not registered yet ? Register Here</Text></TouchableOpacity>
            <Button full style={{marginTop:10}}>
            <Text>Login</Text>
          </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}