import React from 'react';
import {View, Text, Pressable, Image, ToastAndroid} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const {item: blog} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate('Tabs')}
          style={styles.back}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{width: 27, height: 27}}
          />
        </Pressable>

        <Pressable
          onPress={() => ToastAndroid.show('Saved Blog', ToastAndroid.SHORT)}
          style={styles.save}>
          <Image
            source={require('../../../assets/icons/saved.png')}
            style={{width: 30, height: 30}}
          />
        </Pressable>
      </View>

      <SafeAreaView style={styles.viewContent}>
        <Image source={blog.thumb} style={styles.thumbnail} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{blog.title}</Text>

          <View style={styles.cardHeader}>
            <Image source={blog.avt} style={styles.imgAvt} />
            <View style={{flexDirection: 'column', marginLeft: 8}}>
              <Text style={styles.nameUser}>{blog.name}</Text>
              <Text style={styles.time}>3 min read</Text>
            </View>
          </View>
          <Text style={styles.content}>{blog.content}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Detail;
