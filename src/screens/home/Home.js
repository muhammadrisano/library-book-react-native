import React, { Component } from 'react';
import { Alert, TouchableOpacity, AsyncStorage, TouchableHighlight, Image } from 'react-native'
import { H2, Container, Label, Header, Title, Button, Icon, CardItem, Text, Left, Right, Card, View, Body, Content, Form, Item, Picker, Input } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import { connect } from 'react-redux'
import { getBooks } from '../../redux/actions/books'
import ImagePicker from 'react-native-image-picker'
import { inputBook } from '../../redux/actions/books'
// import AsyncStorage from '@react-native-community/async-storage';
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      isModalVisible: false,
      name: "",
      image: "",
      writer: "",
      description: "",
      location: "",
      id_category: "",
      status: "",
      photo: null
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }
  handlerChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  prosesInput = async () => {
    const dataFile = new FormData()
    // console.warn( this.state.photo)
    dataFile.append('image', this.state.photo)
    dataFile.append('name', this.state.name)
    dataFile.append('writer', this.state.location)
    dataFile.append('location', this.state.writer)
    dataFile.append('description', this.state.description)
    dataFile.append('id_category', this.state.id_category)

    // console.log(this.state)
    await this.props.dispatch(inputBook(dataFile))
      .then((response) => {

        this.props.navigation.navigate('Home')

      })


  }
  handlerChangeWriter = (e) => {
    this.setState({
      writer: e.target.value
    })
  }

  handlerChangeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  handlerChangeLocation = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handlerChangeIdcategory = (e) => {
    this.setState({
      id_category: e.target.value
    })
  }
  _alert(string) {
    Alert.alert(string)
    console.warn(string)
    console.warn(" ini store" + AsyncStorage.getItem('token'))
  }
  question = () => {
    Alert.alert(
      'do you want to donate books?',
      '',
      [{},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => this.toggleModal() },
      ],
      { cancelable: false },
    );
  }

  componentDidMount = async () => {

    await this.props.dispatch(getBooks())

  }


  render() {


    // console.warn(a.token)
    console.warn(AsyncStorage.getItem('token'))
    return (
      <Container>

        <Header noShadow style={{ backgroundColor: "#BC8F8F" }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Library Book</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.question}>
              <Icon name='add' />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={{ marginTop: 20, width: '90%', marginRight: 'auto', marginLeft: 'auto' }}>
            <Item rounded style={{ marginBottom: 20 }}>
              <Input placeholder='Search Book' />
            </Item>

          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center',
          }}>

            {/* card bokok */}
            <>



              {this.props.bookshow.map((item) =>

                <Card style={{
                  width: "43%", marginLeft: 17, marginBottom: 15, shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7, borderRadius: 10
                }} key={item.id_book}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Detailbook', {
                    bookdetail: item
                  })}>
                    <CardItem cardBody style={{ borderRadius: 10 }}>
                      <Image source={{ uri: item.image }} style={{ height: 150, width: null, flex: 1, borderRadius: 10 }} />
                    </CardItem>
                  </TouchableOpacity>
                  <CardItem style={{ borderRadius: 10 }}>
                    <Left>

                      <Text>{item.name}</Text>

                    </Left>
                  </CardItem>
                </Card>


              )}



            </>



          </View>


        </ScrollView>
        {/* modal donate */}
        <View style={{ flex: 1 }}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 }}>
              <Content style={{ backgroundColor: "white", width: '98%', marginLeft: "auto", marginRight: "auto", padding: 10, }}>
                <H2 style={{ marginTop: 10, marginBottom: 10, marginLeft: 'auto', marginRight: 'auto' }}>Donate Book </H2>
                <Form>
                  <Item floatingLabel>
                    <Label>Title Book</Label>
                    <Input onChangeText={(name) => this.setState({ name })}
                      value={this.state.name} />
                  </Item>


                  <Button info onPress={this.handleChoosePhoto} style={{ width: 200, marginTop: 20, borderRadius: 40 }}><Text>Upload Gambar </Text></Button>
                  {/* <Button title="Choose Photo" onPress={this.handleChoosePhoto} /> */}

                  <Item floatingLabel style={{ marginTop: 0 }}>
                    <Label>Writer</Label>
                    <Input onChangeText={(writer) => this.setState({ writer })}
                      value={this.state.writer} />
                  </Item>

                  <Item floatingLabel>
                    <Label>Description</Label>
                    <Input onChangeText={(description) => this.setState({ description })}
                      value={this.state.description} />
                  </Item>

                  <Item floatingLabel>
                    <Label>Location</Label>
                    <Input onChangeText={(location) => this.setState({ location })}
                      value={this.state.location} />
                  </Item>

                  <Item floatingLabel>
                    <Label>Categori</Label>
                    <Input onChangeText={(id_category) => this.setState({ id_category })}
                      value={this.state.id_category} />
                  </Item>
                  <View style={{
                    marginTop: 40, flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Button warning onPress={this.toggleModal} style={{ width: "45%", marginLeft: 10, textAlign: "center" }}><Text style={{ textAlign: "center" }}> Cancel </Text></Button>
                    <Button primary style={{ width: "45%", marginLeft: 10, textAlign: "center" }} onPress={this.prosesInput}><Text style={{ textAlign: "center" }}> Donate </Text></Button>
                  </View>
                </Form>
                {/* <Button block warning onPress={this.toggleModal} style={{marginTop:10}}>
            <Text>Cancel</Text>
          </Button> */}

              </Content>
            </View>
          </Modal>
        </View>

        {/* end modal donate */}

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
