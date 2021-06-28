import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ToastAndroid,
  StatusBar,
  ScrollView,
} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const {item: blog} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000B10"
        translucent={true}
      />
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate('Tabs')}
          style={styles.back}>
          <Image
            source={require('../../../assets/icons/back.png')}
            style={{width: 25, height: 25}}
          />
        </Pressable>

        <Pressable
          onPress={() => ToastAndroid.show('Saved Blog', ToastAndroid.SHORT)}
          style={styles.save}>
          <Image
            source={require('../../../assets/icons/save.png')}
            style={{width: 25, height: 25, resizeMode: 'contain'}}
          />
        </Pressable>
      </View>

      <SafeAreaView style={styles.viewContent}>
        <ScrollView style={{width: '100%', height: '100%'}}>
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
            <Text style={styles.content}>{`${blog.content}`}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <Pressable
          onPress={() =>
            ToastAndroid.show('Share Facebook', ToastAndroid.SHORT)
          }
          style={styles.viewFB}>
          <Image
            source={require('../../../assets/icons/facebook.png')}
            style={{width: 50, height: 50}}
          />
        </Pressable>

        <Pressable
          onPress={() =>
            ToastAndroid.show('Share Pinterest', ToastAndroid.SHORT)
          }
          style={styles.viewPint}>
          <Image
            source={require('../../../assets/icons/pinterest.png')}
            style={{width: 40, height: 40}}
          />
        </Pressable>

        <Pressable
          onPress={() => ToastAndroid.show('Share Twitter', ToastAndroid.SHORT)}
          style={styles.viewTwit}>
          {/* <Icon name="twitter" color={'white'} size={35} /> */}
          <Image
            source={require('../../../assets/icons/twitter.png')}
            style={{width: 25, height: 25}}
          />
        </Pressable>

        <Pressable
          onPress={() =>
            ToastAndroid.show('Share Instagram', ToastAndroid.SHORT)
          }
          style={styles.viewLike}>
          <Image
            source={require('../../../assets/icons/like.png')}
            style={{width: 25, height: 25}}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Detail;
