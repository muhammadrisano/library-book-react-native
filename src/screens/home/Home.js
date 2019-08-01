import React, {Component} from 'react';
import { Alert, TouchableOpacity, Image} from 'react-native'
import { Container, Header, Title, Button, Icon,CardItem ,Text , Left, Right, Card,View, Body, Content, Form, Item, Picker, Input } from "native-base";
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
  
        return(
            <Container>
              
            <Header noShadow>
              <Left>
                <Button transparent  onPress={()=>this.props.navigation.navigate('Profile', {
            userid: 'Tatas'
          })}>
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
          
        {/* card bokok */}
        <>
      
      {this.props.bookshow.map((item)=>
    
        <Card style={{width:"43%", marginLeft:17, marginBottom: 15, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7, borderRadius: 10}} key={item.id_book}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detailbook', {
          bookdetail: item
        })}>
        <CardItem cardBody style={{ borderRadius: 10}}>
          <Image source={{uri: item.image}} style={{height: 150, width: null, flex: 1,  borderRadius: 10}}/>
        </CardItem>
        </TouchableOpacity>
        <CardItem style={{ borderRadius: 10}}>
          <Left>
        
              <Text>{item.name}</Text>
                 
          </Left>
        </CardItem>
      </Card> 
          
          
          )}
       
       
                  
      </>


        {/* end card book */}
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
