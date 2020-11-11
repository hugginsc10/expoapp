import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/nav';
import Generate from './src/generate';
import List from './src/list';


const apple = () => {
  const [random, setRandom] = useState([1,2,3]);


  useEffect(()=> {

  }, [])




const onAddRandom = () => {
  const randomVal = Math.floor(Math.random() * 100) +1;
  const newState =[...random, randomVal]
  setRandom(newState)
}


  return (
    <View style={styles.mainView}>
      <Nav appName="Nav" />
      <Generate add={() => onAddRandom()} />
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
        <List items={random} />
    </View>
  );
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