import {Router,Stack,Scene} from 'react-native-router-flux';
import React from 'react';
import Login from './pages/Login'
import Sd from './pages/Sd'
export default class Routes extends React.Component {
  
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene  component={Login}  initial={true} title="Login"/>
          <Scene key="sd" component={Sd} title="Home"/>
        </Scene>
      </Router>
    );
  }
}


