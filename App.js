import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/nav'


const apple = () => {
  return (
    <View style={styles.mainView}>
      <Nav appName='Nav' />
      <View>
        <Text style={styles.text}>Lizzie</Text>
      </View>
      <View>
        <Text style={styles.text}>Learns</Text> 
      </View>
      <View>
        <Text style={styles.text}>React</Text> 
      </View>
      <View>
        <Text style={styles.text}>Native</Text>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor:'blue',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'gold',
    fontSize: 24,
  },
});


export default apple;