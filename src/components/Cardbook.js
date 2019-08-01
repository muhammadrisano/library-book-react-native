import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, View, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Cardbook extends Component {
  render() {
    return (
        <>
       
          <Card style={{width:"45%", marginLeft:10, marginBottom: 15,}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>
         
          <Card style={{width:"45%", marginLeft:10,marginBottom: 15}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>

          <Card style={{width:"45%", marginLeft:10, marginBottom: 15}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>
         
          <Card style={{width:"45%", marginLeft:10, marginBottom: 15}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>

          <Card style={{width:"45%", marginLeft:10, marginBottom: 15}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>
         
          <Card style={{width:"45%", marginLeft:10, marginBottom: 15}}>
            <CardItem cardBody>
              <Image source={{uri: 'http://img.bukabuku.net/product_original/2/f/2fda9087b6ccd089d7d1c9d1f85e671a.jpg'}} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
            
                  <Text>NativeBase</Text>
                     
              </Left>
            </CardItem>
          </Card>
         
          
                    
        </>
    
    );
  }
}