import React, { Component } from 'react';
import { Image } from 'react-native';
import {connect} from 'react-redux'
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
class Cardbook extends Component {
  render() {
    return (
        <>
        {this.props.bookshow.map((item)=>
          <Card style={{width:"45%", marginLeft:10, marginBottom: 15,}} key={item.id_book}>
          <CardItem cardBody>
            <Image source={{uri: item.image}} style={{height: 150, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
          
                <Text>{item.name}</Text>
                   
            </Left>
          </CardItem>
        </Card>   
            
            
            )}
         
         
           
          
                    
        </>
    
    );
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
  
  export default connect(mapStateToProps)(Cardbook);