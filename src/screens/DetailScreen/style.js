import {StyleSheet, Dimensions} from 'react-native';
import COLOR from '../../consts/color';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
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
    top: 16,
    left: 10,
  },
  save: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  viewContent: {
    width: width,
    height: height,
  },
  thumbnail: {
    width: width,
    height: 250,
  },
  title: {
    color: COLOR.black,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 8,
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
    fontSize: 17,
    marginTop: 8,
  },
});
