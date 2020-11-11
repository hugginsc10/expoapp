import React from "react";
import { Text, View, StyleSheet, Pressable} from 'react-native';


const List = ({items}) => {
    return (
        items.map((item)=>(
          <Pressable
          style={{width:"100%"}}
          // onLongPress={()=>alert('chas loves cookies')}
          // delayLongPress={300}
          onPressIn={()=>alert('in')}
          onPressOut={()=>alert('out')}
          >
            <View style={styles.item}
            key={item}
             >
                <Text>
                    {item}
            </Text>
            </View>
          </Pressable>
        ))
       
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