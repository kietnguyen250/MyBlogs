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
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  header: {
    position: 'relative',
    width: width,
    height: 50,
    flexDirection: 'row',
    padding: 5,
    marginVertical: 16,
    alignItems: 'center',
  },
  textHeader: {
    position: 'absolute',
    left: 10,
    fontSize: 25,
    color: COLOR.black,
    fontFamily: 'Oxygen-Regular',
  },
  imgAdd: {
    position: 'absolute',
    width: 35,
    height: 35,
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
    fontFamily: 'Oxygen-Regular',
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
    fontSize: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    fontFamily: 'Oxygen-Bold',
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
