import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // marginBottom: 10,
    backgroundColor: '#212F3D',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    width: '100%',
    height: 70,
    justifyContent: 'space-between',
  },
  logoName: {
    flexDirection: 'row',
    height: '25%',
    alignItems: 'center',
  },
  brandName: {
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  logo: {
    width: 35,
    backgroundColor: 'white',
    height: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  title: {
    height: 50,
    backgroundColor: '#212F3D',
    paddingLeft: 20,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  form: {
    padding: 20,
  },
  imgPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  pick: {
    marginLeft: 10,
    backgroundColor: '#7DCEA0',
    padding: 6,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  pic: {
    marginBottom: 10,
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginLeft: 10,
    borderRadius: 10,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  catName: {
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  item: {
    padding: 7,
    backgroundColor: '#7DCEA0',
    borderRadius: 6,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#212F3D',
  },
  add: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  overlayCont: {
    top: -10,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  promp: {
    width: '50%',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
  },
  yes: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    width: 70,
    padding: 8,
    backgroundColor: 'black',
  },

  str: {
    color: 'white',
    fontWeight: 'bold',
  },
  loading: {
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
  },
});
