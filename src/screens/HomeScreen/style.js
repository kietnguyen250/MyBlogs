import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../consts/color';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: COLOR.white,
  },
  header: {
    position: 'relative',
    width: width,
    height: 40,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  textHeader: {
    position: 'absolute',
    left: 10,
    fontSize: 20,
    color: COLOR.black,
  },
  imgAdd: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 25,
  },
  cardContainer: {
    height: 350,
    padding: 8,
  },
  cardHeader: {
    position: 'relative',
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
  imgAvt: {
    width: 35,
    height: 35,
    margin: 5,
    borderRadius: 30,
  },
  nameUser: {
    fontSize: 15,
  },
  time: {
    color: COLOR.gray,
    fontSize: 13,
  },
  imgMore: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 5,
  },
  cardTitle: {
    fontSize: 17,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  thumbnail: {
    width: width * 0.9,
    height: 200,
    borderRadius: 8,
    alignSelf: 'center',
  },
  cardLine: {
    width: width * 0.9,
    borderWidth: 1,
    borderColor: COLOR.light,
    marginVertical: 20,
  },
});
