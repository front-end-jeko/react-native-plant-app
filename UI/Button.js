import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'


const ButtonWithBackground = ({ children, onPress, opacity, backgroundColor }) => (
    <TouchableHighlight underlayColor="transparent" activeOpacity={opacity} onPress={onPress}>
        <View style={[styles.button, { backgroundColor: backgroundColor }]}>
            <Text>{children}</Text>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button: {
        fontSize: 14,
        borderRadius: 6,
        width: '100%', 
        height: 48,
        alignItems: 'center', 
        justifyContent: "center", 
        shadowColor: '#323643',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    }
})

export default ButtonWithBackground
