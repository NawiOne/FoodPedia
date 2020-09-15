import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  addCartCreator,
  searchMenuCreator,
  clearCreator,
} from '../redux/actions/menu';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Order from '../components/order';
import style from '../style/search';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const {menu} = useSelector((state) => state);
  console.log(menu.dataSearch.msg);

  return (
    <>
      <View style={style.container}>
        <View style={style.topTab}>
          <TouchableOpacity
            onPress={() => {
              dispatch(clearCreator());
              navigation.goBack();
            }}>
            <Icon name="md-arrow-back" size={25} style={style.icon} />
          </TouchableOpacity>
          <Text style={style.text}>Search</Text>
        </View>
        <View style={style.searchBar}>
          <Icon name="search" size={18} />
          <TextInput
            placeholder="search your food"
            style={style.search}
            autoFocus={true}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              dispatch(searchMenuCreator(name));
              setName(null);
            }}
          />
        </View>
        <ScrollView style={style.listCont}>
          {menu.isPending ? (
            <View>
              <ActivityIndicator size="large" color="black" />
            </View>
          ) : menu.dataSearch.msg === undefined ? (
            menu.dataSearch.map((item, index) => {
              return (
                <TouchableOpacity
                  press
                  style={style.list}
                  key={index}
                  onPress={() =>
                    dispatch(
                      addCartCreator(
                        item.id_menu,
                        item.name,
                        item.price,
                        item.picture,
                      ),
                    )
                  }>
                  <Image source={{uri: item.picture}} style={style.listPic} />
                  <View style={style.desc}>
                    <Text>{item.name}</Text>
                    <Text>Rp. {item.price}</Text>
                  </View>
                  <TouchableOpacity
                    style={style.cart}
                    onPress={() => {
                      dispatch(
                        addCartCreator(
                          item.id_menu,
                          item.name,
                          item.price,
                          item.picture,
                        ),
                      );
                    }}>
                    <Text style={style.cartText}>Add to cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })
          ) : (
            <View style={style.empty}>
              <Text>Menu is not available</Text>
            </View>
          )}
        </ScrollView>
      </View>
      {menu.cart.length ? <Order navigation={navigation} /> : null}
    </>
  );
};

export default Search;
