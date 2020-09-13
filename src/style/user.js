import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    backgroundColor: 'black',
    marginBottom: 15,
  },
  photo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  userImg: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 140,
  },
  name: {
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  id: {
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    paddingTop: 8,
    height: 50,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    marginLeft: 25,
    fontWeight: 'bold',
  },
});
