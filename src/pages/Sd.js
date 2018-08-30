import React from 'react';
import { StyleSheet, Text, View , Button , TextInput  } from 'react-native';
import Logo from '../components/Logo'
export default class js extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getData = ()=> {
    fetch('http://tasaheel.thep7analytics.com/api/v1/securityQuestions').
    then((Response)=>Response.json())
    .then((res)=> {
      this.setState({arr:res.collection});
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Text>You are Logged</Text>
        <Text></Text>
        <Button title="Tap Here To fetch data" onPress={()=>this.getData()}/>
        <Text></Text>
        {this.state.arr &&
          <View>
            <Text>ID: {this.state.arr[0].ID}   Question: {this.state.arr[0].Question}</Text>
            <Text>ID: {this.state.arr[1].ID}   Question: {this.state.arr[1].Question}</Text>
            <Text>ID: {this.state.arr[2].ID}   Question: {this.state.arr[2].Question}</Text>
            <Text>ID: {this.state.arr[3].ID}   Question: {this.state.arr[3].Question}</Text>
            <Text>ID: {this.state.arr[4].ID}   Question: {this.state.arr[4].Question}</Text>

          </View>
        }
        
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
