import React, { Component } from 'react'
import * as Font from 'expo-font';

export class FontLoad extends Component {
    
    renderFont = async () => {
        try {
            await Font.loadAsync({
            'SFUITextBold': require('../assets/fonts/SFUIText-Bold.ttf'),
            'SFUITextMedium': require('../assets/fonts/SF-UI-Text-Medium.ttf'),
            'SFUITextRegular': require('../assets/fonts/SFUIText-Regular.ttf'),
            });
        
    
        } catch(error) {
            console.log('გაისროლა ერორი');
        }
    }

    render() {
        return this.renderFont()
    }
}

export default FontLoad
