import React from 'react';
import { StyleSheet, View ,Image} from 'react-native';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:100,height:70}} source={require('../Images/refLogoWhite.png')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
