import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Container, Header, Content, ListItem, Text, Radio, CheckBox , Right, Left, Body ,Item ,Input } from 'native-base';
import { connect } from 'react-redux';
import * as actionQuestion from './../redux/actions/question';
import axios from 'axios';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
        curentNumber:1,
        selectedRadio:'',
        itemCheckbox:[],
        questionId:[],
        userId:[],
        text:''
    };
  }

  componentDidMount() {
    this.props.getQuestion()
  }

  handleNext(id,userId){
      let questionId = this.state.questionId
      let idUser = this.state.userId  
      questionId.push(id)
      idUser.push(userId)
      this.setState({
        curentNumber:this.state.curentNumber+1,
        questionId,
        userId:idUser
      })
  }

  handleCheked(item){

    let checkBox = this.state.itemCheckbox

    if(checkBox && checkBox.includes(item)){
      const index = checkBox.indexOf(item)
      checkBox.splice(index, 1)
    }
    else{
      checkBox = checkBox.concat(item)
    }

    this.setState({itemCheckbox:checkBox})
  }

  handleCek(){
    const answer = [`${this.state.text}`,`${this.state.itemCheckbox}`,`${this.state.selectedRadio}`]

    // console.log(answer)
  }

  handleFinish(){
    const answer = [`${this.state.text}`,`${this.state.itemCheckbox}`,`${this.state.selectedRadio}`]

    axios.post('https://heroku-api-v1.herokuapp.com/answer', {
      question_id: this.state.questionId,
      user_id: this.state.userId,
      answer
    })
    .then(function (response) {
      alert('data sudah ter input')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  checkFormInput(type,option,id){
      if(type == 'multiple choice'){
          optArr = option.split(',')
          const checkBox = this.state.itemCheckbox
          return optArr.map(items => 
                                <View>
                                  <ListItem onPress={()=>this.handleCheked(items)}>
                                        <CheckBox  
                                            checked={checkBox && checkBox.includes(items)} 
                                        />
                                    <Body>
                                        <Text>{items}</Text>
                                    </Body>
                                 </ListItem>  
                                </View>  
          )
      }
      else if(type == 'multi select'){
        optArr = option.split(',')
        return optArr.map(items => 
                                <View>
                                  <ListItem onPress={()=>this.setState({selectedRadio:items})} >
                                        <Radio
                                              style={{height:30, width:30}} 
                                              selected={ this.state.selectedRadio === items } 
                                          />
                                      <Body>
                                          <Text>{items}</Text> 
                                      </Body>
                                      <Right />
                                  </ListItem>  
                                </View>
                               
         )
         
      }
      else{
          return  <View>
                    <Item>
                      <Input onChangeText={(text) => this.setState({text})} placeholder="Masukan Jawaban" />
                    </Item>
                  </View>
                 
      }
  }

  render() {

        return (
            
            <Container>      
      
              {this.props.question.data.map(item => {
                  if(item.number === this.state.curentNumber)
                  {
                    return <View key={item.id}>
                                <Text>{item.number}.</Text>  
                                <Text>{item.description}</Text>
                                <Content></Content>
                                {this.checkFormInput(item.type,item.options,item.id)}
                                <Button title="next" onPress={()=>this.handleNext(item.id,this.props.user.userId)} />
                           </View>
                  }
              }
              
            )}
                    {(this.state.curentNumber < 4) ? 
                    true
                    :
                    <Button title="finish" onPress={()=>this.handleFinish()} />
                    }

                    {/* <Button title="cek" onPress={()=>alert(this.props.user.userId)} /> */}
            </Container>
          );
    
  }
}

const mapStateToProps = state => {
    return {
      question: state.question,
      user: state.register
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        getQuestion: () => dispatch(actionQuestion.getQuestion())
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question);
