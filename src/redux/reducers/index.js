import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigations/RootNavigation';
// import todos from './todos';
import register from './register';
import question from './question';

const router = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router,
  register,
  question
})

export default appReducer

