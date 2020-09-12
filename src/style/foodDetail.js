import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#EAF2F8',
  },
  searchBar: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#CACFD2',
    height: 40,
    borderRadius: 10,
  },
  search: {
    width: '60%',
  },
  top: {
    width: '100%',
    height: '26%',
    backgroundColor: 'red',
  },
  topImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  listCont: {
    alignSelf: 'center',
    width: '95%',
    marginTop: 10,
    backgroundColor: '#EAF2F8',
  },
  list: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    height: 110,
    borderWidth: 0.3,
    borderColor: '#EAEDED',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 1,
    borderRadius: 10,
  },
  listPic: {
    height: '100%',
    width: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  desc: {
    alignSelf: 'flex-start',
    width: '35%',
  },
  cart: {
    alignSelf: 'flex-end',
    backgroundColor: '#FA7D21',
    borderRadius: 8,
    padding: 8,
  },
  cartActive: {
    alignSelf: 'flex-end',
    backgroundColor: '#99A3A4',
    borderRadius: 8,
    padding: 8,
  },
  cartText:{
    color: 'black',
    fontSize: 11,
  },
  empty: {
    marginTop: 40,
    alignItems: 'center',
  },
});
