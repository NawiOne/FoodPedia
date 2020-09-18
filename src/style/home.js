import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.4;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  logo: {
    width: 35,
    backgroundColor: '#1C2833',
    height: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  carousel: {
    width: '100%',
    height,
  },

  carouselImg: {
    width: '100%',
    resizeMode: 'cover',
  },
  indic: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  dot: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 2,
    color: '#888',
  },
  dotActive: {
    margin: 2,
    color: 'white',
    fontSize: 18,
  },
  listFood: {
    marginTop: 20,
    width: '100%',
    padding: 5,
    marginLeft: 5,
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'flex-start',
  },
  food: {
    width: '43%',
    height: 120,
    margin: 10,
    // borderRadius: 10,
    marginBottom: 40,
  },
  foodImg: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
  },
  nameFood: {
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  loading: {
    position: 'absolute',
    left: '42%',
    top: -10,
  },
});
