import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  getMenuCreator,
  addCartCreator,
  searchMenuCreator,
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
import style from '../style/search';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuCreator());
  }, [dispatch]);
  const {menu} = useSelector((state) => state);

  return (
    <View>
      <View style={style.searchBar}>
        <Icon name="search" size={18} />
        <TextInput
          placeholder="search your food"
          style={style.search}
          autoFocus={true}
          onChangeText={(text) => {
            dispatch(searchMenuCreator(text));
          }}
        />
      </View>
      <ScrollView style={style.listCont}>
        {menu.isPending ? (
          <View>
            <Text>Loading</Text>
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : menu.dataSearch.length ? (
          menu.dataSearch.msg ? (
            <Text>kkk</Text>
          ) : (
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
          )
        ) : (
          <View style={style.empty}>
            <Text>search here</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Search;
