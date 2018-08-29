import React from 'react';
import { StyleSheet, Text, View , Button , TextInput  } from 'react-native';
import Logo from '../components/Logo'
export default class js extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "",password:"",msg:""};
  }
  Login = ()=> {
    this.setState({msg:"sd"})
  }
  EmailChange = (val) => {
    this.setState({email:val})
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        
        <Text>ALoo LOGED</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#b642f4',
    justifyContent: 'center'
  },
  text : {
    width: 200
  }
});
