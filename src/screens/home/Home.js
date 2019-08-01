import React, {Component} from 'react';
import { Alert} from 'react-native'
import Cardbook from '../../components/Cardbook'
import { Container, Header, Title, Button, Icon, Left, Right, View, Body, Content, Form, Item, Picker, Input } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import {getBooks} from '../../redux/actions/books'
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

    componentDidMount = async () => {

      await this.props.dispatch(getBooks())
     
  }


    render(){
      console.warn(this.props.bookshow)
        return(
            <Container>
              
            <Header noShadow>
              <Left>
                <Button transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Library Book</Title>
              </Body>
              
            </Header>
            <ScrollView>
            <View style={{marginTop:20, width:'90%', marginRight: 'auto', marginLeft: 'auto'}}>
          <Item rounded style={{marginBottom: 20}}>
            <Input placeholder='Search Book'/>
          </Item>
        
        </View>
          <View style={{ flex:1,
        flexDirection:'row', flexWrap: 'wrap', alignItems: 'center',}}>
          
          <Cardbook />
          </View>


          </ScrollView>
          </Container>

        )
    }

}

const mapStateToProps = state => {
  return {

      jumlahbuku: state.books.jumlahbuku,
      bookshow: state.books.bookshow,
      token: state.users.token,
      id_user: state.users.id_user,
      role_id: state.users.role_id
  }

}

export default connect(mapStateToProps)(Home);
