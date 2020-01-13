import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Image, Modal, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Font from 'expo-font';

import * as theme from '../constants/theme';
import ButtonWithBackground from '../UI/Button';


class Welcome extends Component {
  state = {
    showTerms: false,
    showRealApp: false,
    fontLoaded: false,
    modalVisible: false,
    illustrations: [
      { key: 1, source: require('../assets/images/illustration_1.png') },
      { key: 2, source: require('../assets/images/illustration_2.png') },
      { key: 3, source: require('../assets/images/illustration_3.png') },
    ]
  }
  

  static navigationOptions = {
    header: null
  };
  

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'SFUITextBold': require('../assets/fonts/SFUIText-Bold.ttf'),
        'SFUITextMedium': require('../assets/fonts/SF-UI-Text-Medium.ttf'),
        'SFUITextRegular': require('../assets/fonts/SFUIText-Regular.ttf'),
      });
  
      this.setState({ fontLoaded: true });

    } catch(error) {
      console.log('eroriaa aaaaaq');
    }
  }


  _renderItem = ({ item }) => {
    return (
      <View style={styles.imageParent}>
        <Image style={styles.image} source={item.source} />
      </View>
    );
  }

  renderTermsService(){
    const { gray } = theme.colors;
    const { base } = theme.sizes;

    return (
      <Modal animationType="slide" visible={this.state.showTerms} onRequestClose={() => this.setState({ showTerms: false })}>
        <View style={{ paddingLeft: '7%', paddingRight: '7%', marginTop: '15%' }}>
          <Text style={{ fontSize: 20, color: theme.colors.black }}>Terms of Service</Text>

          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.  
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              2. Support for Expo services is only available in English, via e-mail.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular',  color: gray }}>
              3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text style={{ marginBottom: base, fontSize: 14, fontFamily: 'SFUITextRegular', color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <TouchableHighlight onPress={() => this.setState({ showTerms: false })} underlayColor="transparent" activeOpacity={0.6} style={{ width: '100%' }}>
            <LinearGradient
              colors={['#0DC6B6', '#28D892']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{ width: '100%', alignItems: 'center', justifyContent: "center", height: 48, borderRadius: 6 }}>
              {
                this.state.fontLoaded ? (
                  <Text
                    style={{
                      backgroundColor: 'transparent',
                      fontSize: 14,
                      color: '#fff',
                      fontFamily: 'SFUITextMedium'
                    }} >
                    I understand
                  </Text>
                ) : null
              }
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </Modal>
    )
  }



  render() {
    const { navigation } = this.props;
    const { illustrations, fontLoaded } = this.state;
    
    return (
      <SafeAreaView>
        <View style={{  height: '20%', width: '100%', justifyContent: 'center', alignItems: 'center', paddingLeft: '13.333%', paddingRight: '13.333%' }}>
        {
          fontLoaded ? (
            <View>
              <Text style={{ color: '#323643', fontSize: 26, fontFamily: 'SFUITextMedium' }}>Your home. <Text style={{ color: theme.colors.primary, fontSize: 26, fontFamily: 'SFUITextBold' }}>Greener</Text> </Text>
              <Text style={{ color: '#C5CCD6', fontSize: 18, textAlign: 'center', marginTop: 13, fontFamily: 'SFUITextMedium' }}>Enjoy the experience.</Text>
            </View>
          ) : null
        }
        </View>

        <View style={{ width: '100%', height: '48%', justifyContent: 'flex-end', alignItems: 'center' }}>
          <AppIntroSlider 
            renderItem={this._renderItem} 
            slides={illustrations} 
            activeDotStyle={{backgroundColor: theme.colors.primary}}
            showPrevButton={false}
            showNextButton={false}
          />
        </View>

        <View style={{ height: '30%', justifyContent: 'flex-end', paddingLeft: '13.333%', paddingRight: '13.333%' }}>
          <TouchableHighlight onPress={() => {navigation.navigate('Login')}} underlayColor="transparent" activeOpacity={0.6} style={{ marginBottom: 30, width: '100%' }}>
            <LinearGradient
              colors={['#0DC6B6', '#28D892']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{ width: '100%', alignItems: 'center', justifyContent: "center", height: 48, borderRadius: 6 }}>
              {
                fontLoaded ? (
                  <Text
                    style={{
                      backgroundColor: 'transparent',
                      fontSize: 14,
                      color: '#fff',
                      fontFamily: 'SFUITextMedium'
                    }} >
                    Login
                  </Text>
                ) : null
              }
            </LinearGradient>
          </TouchableHighlight>

          <ButtonWithBackground opacity={0.6} onPress={() => {navigation.navigate('Signup')}} backgroundColor='#fff'>
            Signup
          </ButtonWithBackground>

          <ButtonWithBackground opacity={1} onPress={() => this.setState({ showTerms: true })}>
            Terms of service
          </ButtonWithBackground>

          {this.renderTermsService()}
        </View>

      </SafeAreaView>
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

  mediumFont: {
    fontFamily: 'SFUITextMedium'
  },

  termsStyle: {
    color: '#9DA3B4',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'SFUITextRegular',
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
    height: 370
  },

})

export default Welcome;


 
