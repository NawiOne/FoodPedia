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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '50%',
    width: 35,
  },
  title: {
    marginTop: 10,
    height: '15%',
    padding: 15,
  },
  shopBag: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  qty: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 15,
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
  cart: {
    alignSelf: 'flex-end',
    borderRadius: 8,
    padding: 8,
  },
  cartText: {
    color: '#229954',
    fontSize: 12,
    fontWeight: 'bold',
  },
  handleQty: {
    marginTop: 10,
    justifyContent: 'space-between',
    width: '80%',
    flexDirection: 'row',
  },
  minus: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#7DCEA0',
    borderRadius: 50,
  },
  plus: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#7DCEA0',
    borderRadius: 50,
  },
  numQty: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameFood: {
    fontWeight: 'bold',
  },
  checkOut: {
    borderColor: '#BDC3C7',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    paddingBottom: 50,
  },
  totalText: {
    alignSelf: 'flex-end',
    padding: 15,
    alignItems: 'flex-start',
    width: '40%',
    height: 150,
  },
  totalNum: {
    padding: 15,
    alignItems: 'flex-end',
    width: '50%',
    height: 100,
  },
  text: {
    marginBottom: 6,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#229954',
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  btn: {
    color: 'white',
  },
  success: {
    alignSelf: 'center',
    fontSize: 20,
  },
  wait: {
    alignSelf: 'center',
  },
});
