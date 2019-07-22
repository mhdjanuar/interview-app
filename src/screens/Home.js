import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Container, Input, Content, List, ListItem, Left, Body, Thumbnail,Right, Footer, Text, Button} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container style={{ backgroundColor:'yellow' }}>
            <Content>

            <Grid>
                <Row style={styles.headerHome}>
                <Text style={{ fontSize:25, fontWeight:'bold' }}>Name Perusahaan</Text>
                </Row>
            </Grid>
                        <List>
                            <ListItem avatar style={styles.ListItem}>
                            <Left>
                                    {/* <Thumbnail style={ styles.Thumbn  ail } source={{ uri: ( (items.usercrosswords[0].is_finished == 1) ? "https://tse3.mm.bing.net/th?id=OIP.OI0zDzADIWtwyGmUjvUSIgHaHa&pid=Api&P=0&w=300&h=300" : null ) }} /> */}
                            </Left>
                                <Grid style={ styles.tittleList }>
                                    <Row>
                                        <Text style={styles.tittle}>Jumlah : 3</Text>
                                    </Row>
                                </Grid>
                            <Right />
                            </ListItem>
                        </List>

                        <List>
                            <ListItem avatar style={styles.ListItem}>
                            <Left>
                                    {/* <Thumbnail style={ styles.Thumbn  ail } source={{ uri: ( (items.usercrosswords[0].is_finished == 1) ? "https://tse3.mm.bing.net/th?id=OIP.OI0zDzADIWtwyGmUjvUSIgHaHa&pid=Api&P=0&w=300&h=300" : null ) }} /> */}
                            </Left>
                                <Grid style={ styles.tittleList }>
                                    <Row>
                                        <Text style={styles.tittle}>Waktu : 3 menit</Text>
                                    </Row>
                                </Grid>
                            <Right />
                            </ListItem>
                        </List> 
                        
            </Content>
            <Footer >
            <Button onPress={ () => this.props.navigation.navigate('Question')} style={{ width:'100%', height:60 , justifyContent:'center'}}>
                <Text>Mulai</Text>
                </Button>
        </Footer>
     </Container>
    );
  }
}

const styles = StyleSheet.create({
    ListItem:{
        backgroundColor:'yellow',
        padding:5,
        borderRadius:20,
        marginRight:15,
        marginTop: 10
    },
    Thumbnail:{
        backgroundColor:'white',
        width:35,
        height:35,
        marginBottom:10,
        borderColor:'black',
        borderWidth:1
    },
    tittleList:{
        alignItems:'center',
        marginTop:15,
        marginRight:15,
    },
    tittle:{
        fontSize:20,
        fontWeight:'bold'
    },
    headerHome:{
      height:120,
      backgroundColor:'white',
      borderBottomLeftRadius:80,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 15,
      alignItems:'center',
      justifyContent:'center'
    }
  });


export default Home;
