import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  ToastAndroid,
  StatusBar,
} from 'react-native';
import styles from './style';
import data from '../../consts/data';
import {useNavigation} from '@react-navigation/native';
import OptionsMenu from 'react-native-option-menu';
const MoreIcon = require('../../../assets/icons/more.png');
import COLOR from '../../consts/color';

const Home = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    const onPress = item => {
      navigation.navigate('Detail', {item: item});
    };
    const editPost = () => {
      ToastAndroid.show('Edit Post', ToastAndroid.SHORT);
    };
    const deletePost = () => {
      ToastAndroid.show('Delete Post', ToastAndroid.SHORT);
    };
    return (
      <Pressable onPress={() => onPress(item)} style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Image source={item.avt} style={styles.imgAvt} />
          <View style={{flexDirection: 'column', marginLeft: 8}}>
            <Text style={styles.nameUser}>{item.name}</Text>
            <Text style={styles.time}>3 min read</Text>
          </View>

          {/* <Pressable
            style={styles.imgMore}
            onPress={() => ToastAndroid.show('More click', ToastAndroid.SHORT)}>
            <Image
              source={require('../../../assets/icons/more.png')}
              style={{width: 20, height: 20}}
            />
          </Pressable> */}
          <View style={styles.imgMore}>
            <OptionsMenu
              button={MoreIcon}
              buttonStyle={{
                width: 18,
                height: 18,
              }}
              destructiveIndex={1}
              options={['Edit', 'Delete', 'Cancel']}
              actions={[editPost, deletePost]}
            />
          </View>
        </View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Image source={item.thumb} style={styles.thumbnail} />
        <View style={styles.cardLine}></View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="black"
        translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Lastest Feed</Text>
        <Pressable
          style={styles.imgAdd}
          onPress={() => ToastAndroid.show('Add blog', ToastAndroid.SHORT)}>
          <Image
            source={require('../../../assets/icons/plus.png')}
            style={{width: 35, height: 35}}
          />
        </Pressable>
      </View>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
