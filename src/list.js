import React from "react";
import { Text, View, StyleSheet } from 'react-native';


const List = () => {
    return (
        <View style={styles.item} >
            <Text>
                tomato cucumber lettuce peppers
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: "grey",
    alignItem: "center",
    padding: 10,
    margin: 5,
    width:'100%'
  },
});

export default List;