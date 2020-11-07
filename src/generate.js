import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';



const Generate = ({add}) => {
    return (
    <>
    {/* <TouchableOpacity></TouchableOpacity> */}
<TouchableHighlight
onPress = {()=> add()}
underlayColor='orange'
activeOpacity={0.2}
// onHideUnderlay={() => alert('hide alert')}
// onShowUnderlay={()=> alert('show alert') }
>
            <View style={styles.generate}>
                <Text>
                    banana apple orange plum pineapple
    </Text>

            </View>
</TouchableHighlight>
 
</>  
    )
}


const styles = StyleSheet.create({
    generate: {
        backgroundColor: 'black',
        alignItem: 'center',
        padding: 10,
        width: '100%',
        color: 'white'
    }
})

export default Generate;