import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
  },
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
  },
  logoName: {
    flexDirection: 'row',
    height: '25%',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: 5,
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
  trash: {
    height: '25%',
    justifyContent: 'center',
  },
  title: {
    height: '20%',
    padding: 20,
  },
  shopBag: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 18,
  },
  listContainer: {
    padding: 20,
  },
  list: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    width: '100%',
    height: 100,
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
  cartText: {
    color: 'black',
    fontSize: 11,
  },
});
