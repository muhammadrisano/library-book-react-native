import React,{Component} from 'react'
import {Alert, TextInput} from 'react-native'
import { Container, Header, Content, Form, Item, Body, Input, Label, Left, Right, Button,Title,Text } from 'native-base';
import PasswordInputText from 'react-native-hide-show-password-input';
import {registerUser} from '../../redux/actions/users'
import Axios from 'axios';
class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:'',
            password2:'',
            fullname:'',
            card_number:'',
            phone:'',
            job:'',
            address:'',
            salt:''
        }
    }

    handerSubmit=async()=>{
       
        // await this.props.dispatch(registerUser({
      if(this.state.password === this.state.password2){
        await Axios.post('http://192.168.6.126:4000/user/register',{
   
                email: this.state.email,
                card_number: this.state.card_number,
                fullname: this.state.fullname,
                password: this.state.password,
                phone: this.state.phone,
                job: this.state.job,
                address: this.state.address
              })
              .then((response)=>{
                Alert.alert("Selamat Anda Berhasil Mendaftar")
                this.props.navigation.navigate('Login')
              })
              .catch(
                Alert.alert("Selamat Anda Berhasil Mendaftar blaba")
              )
      }else{
        Alert.alert("Password Confirm tidak sama")
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
            <Button hasText transparent onPress={()=> this.props.navigation.navigate('Home')}>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
            <Content style={{padding:20}}>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={(email) => this.setState({email})}
          value={this.state.email} />
                </Item>

                <PasswordInputText iconColor="#000" style={{width:"95%",  marginLeft: 12,}} label="Password" onChangeText={(password) => this.setState({password})} value={this.state.password} />
                
                <PasswordInputText style={{width:"95%", marginLeft: 12,}} label="Password Confirm" onChangeText={(password2) => this.setState({password2})} value={this.state.password2} />
              
                <Item floatingLabel>
                  <Label>Full Name</Label>
                  <Input onChangeText={(fullname) => this.setState({fullname})}
          value={this.state.fullname} />
                </Item>
                <Item floatingLabel>
                  <Label>Card Name</Label>
                  <Input onChangeText={(card_number) => this.setState({card_number})}
          value={this.state.card_number} />
                </Item>
                <Item floatingLabel>
                  <Label>No Phone</Label>
                  <Input onChangeText={(phone) => this.setState({phone})}
          value={this.state.phone} />
                </Item>
                <Item floatingLabel>
                  <Label>Job</Label>
                  <Input onChangeText={(job) => this.setState({job})}
          value={this.state.job} />
                </Item>
                <Item floatingLabel>
                  <Label>Address</Label>
                  <Input onChangeText={(address) => this.setState({address})}
          value={this.state.address} />
                </Item>
                <Button full style={{marginTop:40, marginBottom:20}} onPress={()=>this.handerSubmit()} >
            <Text>Primary</Text>
          </Button>
              </Form>
            </Content>
          </Container>
        );
      }

}

export default Register
