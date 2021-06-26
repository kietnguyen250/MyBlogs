import React from 'react';
import {View, Text, StatusBar, Image, Pressable} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {symbolTypeAnnotation} from '@babel/types';

const Plash = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View style={styles.contentContainer}>
        <View style={{marginVertical: 20}}>
          <Text style={styles.title}>The Future of </Text>
          <Text style={styles.title}>Photography</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            source={require('../../../assets/ps5.jpg')}
            style={styles.avt}
          />
          <Text style={styles.textName}>Tobias Van</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor: '#3BBCF8',
              margin: 5,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#a6a6a6',
              margin: 5,
            }}
          />
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#a6a6a6',
              marginLeft: 5,
              marginVertical: 5,
            }}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Pressable
          onPress={() => navigation.navigate('Login')}
          style={styles.login}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Register')}
          style={styles.signUp}>
          <Text style={styles.textSignUp}>CREATE ACCOUNT</Text>
        </Pressable>
      </View>
      <Image source={require('../../../assets/bg.png')} style={styles.imgBG} />
    </View>
  );
};

export default Plash;
