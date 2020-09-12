import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    paddingTop: 20,
    textAlign: 'justify',
    alignItems: 'center',
    alignContent: 'center',
  },
  logo: {
    marginTop: 80,
    alignSelf: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  logoImg: {
    width: 23,
    height: 23,
  },
  spoon: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 6,
  },
  login: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    color: 'black',
    width: 290,
    marginBottom: 20,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#D5DBDB',
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#C6456A',
    height: 45,
  },
  createAcc: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
  },
  regis: {
    marginTop: 10,
    alignItems: 'center',
  },
  // for register
  register: {
    color: 'black',
    width: 280,
    height: 42,
    marginBottom: 15,
    padding: 10,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#D5DBDB',
  },
  btnRegis: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: '#C6456A',
    height: 42,
  },
  loginRegis: {
    color: 'white',
  },
});