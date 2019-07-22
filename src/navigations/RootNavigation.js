import { createStackNavigator, createAppContainer } from "react-navigation";

import TodoList from './../screens/List';
import Register from './../screens/Register';
import Home from './../screens/Home';
import Question from './../screens/Question';

const MainNavigator = createStackNavigator({

  TodoList: {
    screen: TodoList,
    navigationOptions: ({ navigation }) => ({
      title: `Todo List`,
    }),
  },
  Register:{
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: `Register`,
      // header:null
    }),
  },
  Home:{
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: `Home`
    }),
  },
  Question:{
    screen: Question,
    navigationOptions: ({ navigation }) => ({
      title: `Question`
    }),
  },

},
{
  initialRouteName: "Register"
}

);

const RootNavigation = createAppContainer(MainNavigator);

export default RootNavigation;