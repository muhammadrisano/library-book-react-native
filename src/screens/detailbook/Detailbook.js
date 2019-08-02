import React, {Component} from 'react'

import {ImageBackground, ScrollView, StyleSheet} from 'react-native'
import {View, Text, H1,H2,H3,  Thumbnail, Button, Content} from 'native-base'
import moment from 'moment'

class Detailbook extends Component{

    

    render(){
        let book =this.props.navigation.getParam('bookdetail')
        return(
            <ScrollView>
     
               <ImageBackground source={{uri: book.image}} style={{width: '100%', height: 250, position:'relative'}}>
                
    <H3 style={{position:"absolute", bottom:5}}>{book.name}</H3>
  
    <Thumbnail square large source={{uri: book.image}} style={{position:"absolute", bottom:-45, right:20, borderWidth: 3, borderColor: "grey", borderRadius: 8, }} />
     
  </ImageBackground>
  <View style={{padding:20}}>
    <Text>Date : {moment(book.created_at).format('ll')} </Text>
  <Text>Write: {book.writer}</Text>
  </View>
  <Text style={{color:'grey', padding: 20}}>{book.description}</Text>
  <Button block warning>
            <Text>Borrow Book</Text>
          </Button>
            </ScrollView>
        )
    }
    
    
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#555',
    },
    shadow: {
      color: '#fff',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 1,
      textShadowColor: '#000',
    },
  });



export default Detailbook