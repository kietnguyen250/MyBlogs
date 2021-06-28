import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../consts/color';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    position: 'relative',
  },
  header: {
    width: width,
    height: 65,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  save: {
    position: 'absolute',
    top: 40,
    right: 15,
  },
  viewContent: {
    width: width,
    height: height * 0.83,
  },
  thumbnail: {
    width: width,
    height: 250,
  },
  title: {
    color: COLOR.black,
    fontSize: 22,
    marginVertical: 8,
    fontFamily: 'Oxygen-Bold',
  },
  contentContainer: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 16,
  },
  cardHeader: {
    position: 'relative',
    flexDirection: 'row',
    marginVertical: 10,
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
  content: {
    fontSize: 19,
    marginTop: 8,
    fontFamily: 'Gruppo-Regular',
  },
  footer: {
    width: width,
    height: 55,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  viewFB: {
    height: '100%',
    width: width / 4,
    backgroundColor: COLOR.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.3,
  },
  viewPint: {
    height: '100%',
    width: width / 4,
    backgroundColor: COLOR.pinterest,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.3,
  },
  viewTwit: {
    height: '100%',
    width: width / 4,
    backgroundColor: COLOR.Twitt,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.3,
  },
  viewLike: {
    height: '100%',
    width: width / 4,
    backgroundColor: COLOR.like,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0.3,
  },
});
