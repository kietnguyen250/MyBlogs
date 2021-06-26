import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const _login = () => {
    navigation.navigate('Tabs');
    ToastAndroid.show('Sign in successfully', ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Welcome</Text>
        <Text style={styles.textTitle}>Back.</Text>
        <View style={styles.line}></View>
      </View>

      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />

      <Pressable
        onPress={() => ToastAndroid.show('Quên mật khẩu', ToastAndroid.SHORT)}
        style={styles.forgot}>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </Pressable>

      <Pressable onPress={() => _login()} style={styles.login}>
        <Text style={styles.textLogin}>SIGN IN</Text>
      </Pressable>

      <Text style={styles.textOr}>OR</Text>

      <Pressable
        onPress={() => ToastAndroid.show('Login Twitter', ToastAndroid.SHORT)}
        style={styles.loginTwit}>
        <Icon name="twitter" color={'white'} size={20} />
        <Text style={styles.textLoginTwit}>Sign in with Twitter</Text>
      </Pressable>

      <Pressable
        onPress={() => ToastAndroid.show('Login Facebook', ToastAndroid.SHORT)}
        style={styles.loginFB}>
        <Icon name="facebook" color={'white'} size={20} />
        <Text style={styles.textLoginFB}>Sign in with Facebook</Text>
      </Pressable>

      <View style={styles.viewSignUp}>
        <Text>New User? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
