import React,{Component} from 'react'

import { Container, Header, Content, Form, Item, Body, Input, Label, Left, Right, Button,Title,Text } from 'native-base';

class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            password2:'',
            fullname:'',
            cardnumber:'',
            nophone:'',
            job:'',
            Address:'',
        }
    }


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
            <Title>Form Register</Title>
          </Body>
          <Right>
            <Button hasText transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
            <Content style={{padding:20}}>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password Confirm</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Full Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Card Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>No Phone</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Job</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Address</Label>
                  <Input />
                </Item>
                <Button full style={{marginTop:40, marginBottom:20}}>
            <Text>Primary</Text>
          </Button>
              </Form>
            </Content>
          </Container>
        );
      }

}

export default Register
