import React from 'react';
import { StyleSheet, Text, View , Button , TextInput  } from 'react-native';
import Logo from '../components/Logo'
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "",password:"",msg:""};
  }
  Login = ()=> {
    Actions.sd();
  }
  EmailChange = (val) => {
    this.setState({email:val})
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <TextInput value={this.state.email} placeholder="email" onChangeText={(text)=>this.EmailChange(text)} style={styles.text}/>
        <TextInput value={this.state.password} placeholder="Password" onChangeText={(text)=>this.setState({password:text})} style={styles.text} secureTextEntry={true}/>
        <Button title="Loggfin" onPress={this.Login}/>
        <Text>{this.state.msg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#42b3f4',
    justifyContent: 'center',
  },
  text : {
    width: 200
  }
});
