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

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Create</Text>
        <Text style={styles.textTitle}>Account.</Text>
        <View style={styles.line}></View>
      </View>

      <TextInput style={styles.input} placeholder="Fullname" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Create Password" />

      <Pressable
        onPress={() => ToastAndroid.show('Sign Up', ToastAndroid.SHORT)}
        style={styles.signUp}>
        <Text style={styles.textSignUp}>CREATE ACCOUNT</Text>
      </Pressable>

      <View style={styles.viewSignIn}>
        <Text>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textSignIn}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
