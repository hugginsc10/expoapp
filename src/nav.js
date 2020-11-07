import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Nav = ({appName}) => {
    return (
        <View style={styles.nav}>
            <Text>
                {appName}
                
             </Text>
            </View>
    )
}


const styles = StyleSheet.create({
  nav: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "purple",
    // alignItems: "",
    // justifyContent: "flex-start",
  },
 
});
export default Nav;