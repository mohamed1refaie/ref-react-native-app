import React from 'react';
import { StyleSheet, Text, View , Button , TextInput ,KeyboardAvoidingView } from 'react-native';
import Logo from '../components/Logo'
import axios from "axios";
import {Actions} from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "",password:"",msg:""};
  }
  Login = ()=> {
    if(this.state.email===""||this.state.password==="")
    {
      alert("Email and Password are required !");
      return;
    }
    fetch('http://tasaheel.thep7analytics.com/api/v1/admins/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((respoense) => respoense.json())
     .then((response => {
       console.log(response);
     }))
    
    Actions.sd();
  }
  EmailChange = (val) => {
    this.setState({email:val})
  }
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.container}>
        <Logo/>
        <Text>{this.state.msg}</Text>
        <Text>Welcome To Ref's App</Text>
        <Text>{this.state.msg}</Text>
        <View id="loginform">
        <TextInput name="email" value={this.state.email} placeholder="email" onChangeText={(text)=>this.EmailChange(text)} style={styles.text}/>
        <TextInput name="password" value={this.state.password} placeholder="Password" onChangeText={(text)=>this.setState({password:text})} style={styles.text} secureTextEntry={true}/>
        </View>
        <Button title="Login" onPress={this.Login}/>
        
      </View>
      </KeyboardAvoidingView>
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
