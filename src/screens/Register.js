import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux'
import * as actionRegis from '../redux/actions/register'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      no_hp: ''
    };
  }

   handleSubmit = () =>{
    // const data = {
    //   username: this.state.username,
    //   email: this.state.email,
    //   password: this.state.no_hp
    // }
    // this.props.register(data,this.props.navigation)
    this.props.navigation.navigate('Home')

  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username) => this.setState({username})} />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input onChangeText={(email) => this.setState({email})} />
            </Item>
            <Item floatingLabel last>
              <Label>Nomer Hp</Label>
              <Input onChangeText={(no_hp) => this.setState({no_hp})} />
            </Item>
          </Form>
          <Button style={{ marginTop:20 }} onPress={()=>this.handleSubmit()} full info>
            <Text>Silahkan Masuk</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    register: (data,nav) => {dispatch(actionRegis.register(data, nav))}
  }
}

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)