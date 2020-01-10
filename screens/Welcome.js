import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Font from 'expo-font';

import * as theme from '../constants/theme';


class Welcome extends Component {
  state = {
    showTerms: false,
    showRealApp: false,
    illustrations: [
      { id: 1, source: require('../assets/images/illustration_1.png') },
      { id: 2, source: require('../assets/images/illustration_2.png') },
      { id: 3, source: require('../assets/images/illustration_3.png') },
    ]
  }
  
  
  componentDidMount() {
    Font.loadAsync({
      'SFUITextBold': require('../assets/fonts/SFUIText-Bold.ttf'),
      'SFUITextMedium': require('../assets/fonts/SFUIText-Medium.ttf'),
      'SFUITextRegular': require('../assets/fonts/SFUIText-Regular.ttf'),
      'SFUIText-Semibold': require('../assets/fonts/SFUIText-Semibold.ttf'),
    });
  }


  _renderItem = (item) => {
    return (
      <View style={styles.imageParent}>
        <Image style={styles.image} source={item.item.source} />
      </View>
    );
  }



  render() {
    const { navigation } = this.props;
    const { illustrations } = this.state;
    
    return (
      <View style={{ flex: 1, width: '100%' }}>
          
        <View style={{  height: '15%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '13.333%', paddingRight: '13.333%' }}>
          <Text style={{ color: '#323643', fontSize: 26, fontFamily: 'SFUITextMedium' }}>Your home. <Text style={{ color: theme.colors.primary, fontSize: 26, fontFamily: 'SFUITextBold' }}>Greener</Text> </Text>
          <Text style={{ color: '#C5CCD6', fontSize: 18, textAlign: 'center', marginTop: 13, fontFamily: 'SFUITextRegular' }}>Enjoy the experience.</Text>
        </View>

        <View style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <AppIntroSlider 
            renderItem={this._renderItem} 
            slides={illustrations} 
            activeDotStyle={{backgroundColor: theme.colors.primary}}
            showPrevButton={false}
            showNextButton={false}
          />
        </View>

        <View style={{ width: '100%', height: '35%', justifyContent: 'center', paddingLeft: '13.333%', paddingRight: '13.333%' }}>
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{ width: '100%' }}>
            <LinearGradient
              colors={['#0DC6B6', '#28D892']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{ width: '100%', alignItems: 'center', justifyContent: "center", height: 48, borderRadius: 6 }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: 'SFUITextMedium'
                }} >
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {navigation.navigate('Signup')}} style={styles.shadowBtn} >
            <Text style={{ fontFamily: 'SFUITextMedium' }}>Signup</Text>
          </TouchableOpacity>

          <View style={{ marginTop: 40 }} onPress={() => this.setState({ showTerms: true })}>
            <Text style={styles.termsStyle}>Terms of service</Text>
          </View>
        </View>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  shadowBtn: {
    width: '100%', 
    height: 150,
    alignItems: 'center', 
    justifyContent: "center", 
    height: 48, 
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#323643',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginTop: 40
  },

  termsStyle: {
    color: '#9DA3B4',
    fontSize: 14,
    textAlign: 'center'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageParent: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 330
  },

})

export default Welcome;


 
