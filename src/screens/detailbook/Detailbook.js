import React, { Component } from 'react'

import { ImageBackground, StyleSheet, ScrollView, Alert, TouchableOpacity, AsyncStorage, TouchableHighlight, Image } from 'react-native'
import { H2, H3, Thumbnail, Container, Label, Header, Title, Button, Icon, CardItem, Text, Left, Right, Card, View, Body, Content, Form, Item, Picker, Input } from "native-base";
import moment from 'moment'
import Modal from "react-native-modal";
import { connect } from "react-redux"
import { borrowuser } from '../../redux/actions/loanbooks'
class Detailbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      id_book: props.navigation.getParam('bookdetail').id_book,
      name: props.navigation.getParam('bookdetail').name,
      image: props.navigation.getParam('bookdetail').image,
      writer: props.navigation.getParam('bookdetail').writer,
      description: props.navigation.getParam('bookdetail').description,
      card_number: null,
      fullname: null,
      id_user: null,
      role_id: null,
      token: null
    }

    AsyncStorage.getItem('card_number', (error, result) => {
      if (result) {
        this.setState({
          card_number: result
        });
      }
    });
    AsyncStorage.getItem('fullname', (error, result) => {
      if (result) {
        this.setState({
          fullname: result
        });
      }
    });
    AsyncStorage.getItem('id_user', (error, result) => {
      if (result) {
        this.setState({
          id_user: result
        });
      }
    });
    AsyncStorage.getItem('role_id', (error, result) => {
      if (result) {
        this.setState({
          role_id: result
        });
      }
    });
    AsyncStorage.getItem('token', (error, result) => {
      if (result) {
        this.setState({
          token: result
        });
      }
    });

  }

  handlerModal = () => {

    if (this.state.role_id === null) {
      Alert.alert("Anda harus login terlebih dahulu")
      this.props.navigation.navigate('Register')
    } else {
      this.toggleModal()
    }

  }


  handlerBorrow = () => {
    this.props.dispatch(borrowuser({
      card_number: this.state.card_number,
      id_book: this.state.id_book,
      expired_date: moment().add(6, 'days').format('l'),
      forfeit: 0,
      information: "PENDING",
      updated_at: new Date()
    }, {
        "authorization": "jangan-coba-coba",
        "x-access-token": "bearer " + this.state.token,
        "x-control-user": this.state.id_user
      }))
      .then((response) => {
        Alert.alert("peminjaman berhasil")
        this.props.navigation.navigate("Home")

      })
      .catch((error) => {

      })
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    let book = this.props.navigation.getParam('bookdetail')
    console.warn(this.state.card_number)

    return (
      <ScrollView>

        <ImageBackground source={{ uri: book.image }} style={{ width: '100%', height: 250, position: 'relative' }}>

          <H3 style={{ position: "absolute", bottom: 5 }}>{book.name}</H3>

          <Thumbnail square large source={{ uri: book.image }} style={{ position: "absolute", bottom: -45, right: 20, borderWidth: 3, borderColor: "grey", borderRadius: 8, }} />
        </ImageBackground>
        <View style={{ padding: 20 }}>
          <Text>Date : {moment(book.created_at).format('ll')} </Text>
          <Text>Write: {book.writer}</Text>
        </View>
        <Text style={{ color: 'grey', padding: 20 }}>{book.description}</Text>
        <Button block warning onPress={() => this.toggleModal()}>

          <Text>Borrow Book</Text>
        </Button>

        {/* modal donate */}
        <View style={{ flex: 1 }}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 }}>

              {/* <Text>Judul Buku : {this.state.name} </Text>
                <Text>Penulis : {this.state.writer}</Text>
                <Text>Nama Peminjam : </Text>
                <Text>Number Card :</Text>
                <Text>Tanggal Pengembalian :</Text> */}
              <Content>
                <Card style={{ height: 500 }}>
                  <CardItem>
                    <Left>

                      <Text>{this.state.name}</Text>

                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={{ uri: this.state.image }} style={{ height: 200, width: null, flex: 1 }} />
                  </CardItem>
                  <CardItem>
                    <Text> Penulis : {this.state.writer}</Text>
                  </CardItem>
                  <CardItem style={{ marginTop: -15, }}>
                    <Text style={{ margin: 0, }}> Tanggal Kembali : {moment().add(10, 'days').calendar()}</Text>
                  </CardItem>
                  <CardItem>
                    <Text> Nama Peminjam : {this.state.fullname}</Text>
                  </CardItem>
                  <CardItem style={{ marginTop: -15, }}>
                    <Text> Card Number : {this.state.card_number}</Text>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button danger onPress={this.toggleModal}><Text> Cancel </Text></Button>
                    </Left>
                    <Body>
                      <Button primary onPress={this.handlerBorrow}><Text> Borrow </Text></Button>
                    </Body>

                  </CardItem>
                </Card>
              </Content>


            </View>
          </Modal>
        </View>

        {/* end modal donate */}

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


const mapStateToProps = state => {
  return {

    token: state.users.token,
    id_user: state.users.id_user,
    role_id: state.users.role_id
  }
}


export default connect(mapStateToProps)(Detailbook);