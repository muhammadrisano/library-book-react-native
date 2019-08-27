import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Content, List, Left, Thumbnail, ListItem, Text, View, Body, Right, Button, } from 'native-base'
import { connect } from 'react-redux'
class tabOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_number: "",
            fullname: "",
            id_user: "",
            role_id: "",
            token: "",
        };

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
    componentDidMount = async () => {
        await this.props.dispatch()

    }


    render() {
        return (
            <View>
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'Image URL' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'Image URL' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </View>
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

export default connect(mapStateToProps)(tabOne);
