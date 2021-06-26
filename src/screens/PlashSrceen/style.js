import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../consts/color';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  imgBG: {
    width: width,
    height: height,
    zIndex: -1,
  },
  contentContainer: {
    width: width * 0.95,
    paddingVertical: 8,
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: 85,
    alignSelf: 'center',
  },
  title: {
    color: COLOR.white,
    fontSize: 30,
    marginVertical: 5,
  },
  avt: {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: 30,
  },
  textName: {
    fontSize: 15,
    color: COLOR.white,
    marginHorizontal: 8,
  },
  button: {
    width: width * 0.9,
    flexDirection: 'row',
    height: 60,
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 0,
  },
  login: {
    backgroundColor: COLOR.white,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    padding: 8,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    marginVertical: 8,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
  },
  textLogin: {
    color: COLOR.black,
    fontSize: 15,
  },
  signUp: {
    backgroundColor: COLOR.primary,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    padding: 8,
    width: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    marginVertical: 8,
    marginHorizontal: 5,
    alignSelf: 'flex-end',
  },
  textSignUp: {
    color: COLOR.white,
    fontSize: 15,
  },
});
