import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Body, Title, Right } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
// import Tab3 from './tabThree';;

class Borrowing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>

                <Header noShadow>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ alignContent: 'center', }}>Borrowing</Title>
                    </Body>

                </Header>
                <Tabs>
                    <Tab heading={<TabHeading>
                        {/* <Icon name="camera" /> */}
                        <Text>Borrow Status</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab heading={<TabHeading><Text>History Borrow</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

export default Borrowing;
