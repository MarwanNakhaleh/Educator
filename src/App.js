import React, {Component} from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router';

import Config from 'react-native-config';

class App extends Component{
  componentWillMount(){
    const config = {
      apiKey: Config.API_KEY,
      authDomain: Config.AUTH_DOMAIN,
      databaseURL: Config.DATABASE_URL,
      projectId: Config.PROJECT_ID,
      storageBucket: Config.STORAGE_BUCKET,
      messagingSenderId: Config.MESSAGING_SENDER_ID
    };
    firebase.initializeApp(config);
  
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      // default reducer required
      <Provider store={store}>
        <View>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;