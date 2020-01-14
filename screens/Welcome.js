import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Image, Modal, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as Font from 'expo-font';

import * as theme from '../constants/theme';

import ButtonWithBackground from '../UI/Button';

import { Block, Text } from '../components/Index';



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
      console.log('გაისროლა ერორი');
    }
  }


  _renderItem = ({ item }) => {
    return (
      <View middle center>
        <Image style={styles.image} source={item.source} />
      </View>
    );
  }

  renderTermsService(){
    const { gray, black } = theme.colors;
    const { base, padding } = theme.sizes;

    return (
      <Modal animationType="slide" visible={this.state.showTerms} onRequestClose={() => this.setState({ showTerms: false })}>
        <View style={{ paddingLeft: '7%', paddingRight: '7%', marginTop: '15%' }}>
          <Text h2 style={{ color: black }}>Terms of Service</Text>

          <ScrollView style={{ marginVertical: padding }}>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.  
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              2. Support for Expo services is only available in English, via e-mail.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base,  color: gray }}>
              3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
            <Text SFUITextRegular h4 style={{ marginBottom: base, color: gray }}>
              10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>

          <TouchableHighlight onPress={() => this.setState({ showTerms: false })} underlayColor="transparent" activeOpacity={0.6}>
            <LinearGradient
              colors={['#0DC6B6', '#28D892']}
              start={[0.0, 0.5]}
              end={[1.0, 0.5]}
              locations={[0.0, 1.0]}
              style={{ width: '100%', alignItems: 'center', justifyContent: "center", height: 48, borderRadius: 6 }}>
              {
                this.state.fontLoaded ? (
                  <Text h4 SFUITextMedium style={{ color: '#fff' }} >
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
    const { h1, h3, h4 } = theme.sizes;
    const { black, primary, gray2 } = theme.colors;
    
    return (
      <SafeAreaView>
          <Block paddingLeft13 paddingRight13 center middle flex={false} style={{  height: '22%' }}>
            {
              fontLoaded ? (
                <View>
                  <Text SFUITextMedium h1 black>Your home. 
                  <Text h1 primary SFUITextBold semibold>Greener</Text> </Text>
                  <Text gray2 h3 center SFUITextMedium style={{ marginTop: 13 }}>Enjoy the experience.</Text>
                </View>
              ) : null
            }
          </Block>

          <Block flexEnd center flex={false} style={{ height: '48%' }}>
            <AppIntroSlider 
              renderItem={this._renderItem} 
              slides={illustrations} 
              activeDotStyle={{backgroundColor: theme.colors.primary}}
              showPrevButton={false}
              showNextButton={false}
            />
          </Block>

          <Block paddingLeft13 paddingRight13 flexEnd flex={false} style={{ height: '30%' }}>
            <TouchableHighlight onPress={() => {navigation.navigate('Login')}} underlayColor="transparent" activeOpacity={0.6} style={{ marginBottom: 30 }}>
              <LinearGradient
                colors={['#0DC6B6', '#28D892']}
                start={[0.0, 0.5]}
                end={[1.0, 0.5]}
                locations={[0.0, 1.0]}
                style={{ width: '100%', alignItems: 'center', justifyContent: "center", height: 48, borderRadius: 6 }}>
                {
                  fontLoaded ? (
                    <Text h4 SFUITextMedium style={{ color: '#fff' }} >
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
          </Block>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 370
  },

})

export default Welcome;


 
