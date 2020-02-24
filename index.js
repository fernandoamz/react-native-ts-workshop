import {AppRegistry} from 'react-native';
import React from 'react';
import App from './components/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';

import configureStore from './store';

const store = configureStore();

const rnworkshop = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => rnworkshop);
