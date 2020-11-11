import React from 'react'
import { Text, View, StyleSheet, 
    TouchableHighlight, TouchableOpacity, Pressable} from 'react-native';



const Generate = ({add}) => {
    return (
    <>
    {/* <TouchableOpacity></TouchableOpacity> */}
<Pressable
onPress = {()=> add()}
underlayColor='orange'
activeOpacity={0.2}
// onHideUnderlay={() => alert('hide alert')}
// onShowUnderlay={()=> alert('show alert') }
>
            <View style={styles.generate}>
                <Text>
                  click to add banana apple orange plum pineapple
    </Text>

            </View>
</Pressable>
 
</>  
    )
}


const styles = StyleSheet.create({
    generate: {
        backgroundColor: 'white',
        alignItem: 'center',
        padding: 10,
        width: '100%',
        color: 'white'
    }
})

export default Generate;