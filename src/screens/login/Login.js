import React, { Component } from 'react';
import { Container, View, Header, H1, H2, H3, Content, Form, Item, Input, Label, Button, Text, Left, Body, Title, Right } from 'native-base';
import { TouchableOpacity, Alert, AsyncStorage } from 'react-native'
import PasswordInputText from 'react-native-hide-show-password-input';
import { loginUser } from '../../redux/actions/users'
import { connect } from 'react-redux'
// import AsyncStorage from '@react-native-community/async-storage';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }
  componentWillUpdate = () => {



  }
  handleLogin = async () => {

    await this.props.dispatch(loginUser({
      email: this.state.email,
      password: this.state.password
    }))
      .then((response) => {
        console.warn(response.action.payload.data.result.card_number)
        AsyncStorage.setItem('token', response.action.payload.data.result.token.toString())
        AsyncStorage.setItem('id_user', response.action.payload.data.result.id_user.toString())
        AsyncStorage.setItem('role_id', response.action.payload.data.result.role_id.toString())
        AsyncStorage.setItem('card_number', response.action.payload.data.result.card_number.toString())
        AsyncStorage.setItem('fullname', response.action.payload.data.result.fullname.toString())
        // window.location.reload();
        console.warn(this.props.user)
        Alert.alert("okeoke")
        this.props.navigation.navigate("Home")
      })
    // .catch(
    //   Alert.alert("password salah")
    // )
  }


  componentDidMount = () => {

    if (this.props.token) {
      this.props.navigation.navigate('home')
    }

  }

  render() {
    console.warn(AsyncStorage.getItem('token'))
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
            <Button hasText transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{ marginTop: 30, marginBottom: 30, }}>
            <H1 style={{ marginLeft: 'auto', marginRight: 'auto', }}>Here To Get</H1>
            <H2 style={{ marginLeft: 'auto', marginRight: 'auto', }}>Welcomed !</H2>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email) => this.setState({ email })}
                value={this.state.email} />
            </Item>
            <PasswordInputText iconColor="#000" style={{ width: "95%", marginLeft: 12, }} label="Password" onChangeText={(password) => this.setState({ password })} value={this.state.password} />
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
              <Text style={{ marginLeft: 10 }}>Do you have an account yet?</Text>
              <TouchableOpacity onPress={() =>
                this.props.navigation.navigate('Register')}><Text style={{ color: 'blue' }}> Register Here</Text></TouchableOpacity>
            </View>
            <Button block style={{ marginTop: 15 }} onPress={() => this.handleLogin()}>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {

    token: state.users.token,
    id_user: state.users.id_user,
    role_id: state.users.role_id,
    user: state.users.user
  }

}

export default connect(mapStateToProps)(Login);
