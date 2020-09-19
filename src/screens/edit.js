import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Input, ButtonGroup} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import {editDataCreator, getMenuCreator} from '../redux/actions/menu';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import style from '../style/edit';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import dish from '../image/main-dishes.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '../redux/reducers/auth';

const Edit = ({navigation}) => {
  const {menu} = useSelector((state) => state);
  const dispatch = useDispatch();
  // state

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [id_category, setidCategory] = useState(null);
  const [catName, setCatName] = useState(menu.editData.name_category);
  const [status, setStatus] = useState(null);
  const [press, setPress] = useState(false);

  // to handle photo from localStorage
  const handleChoose = () => {
    const options = {
      title: 'select-picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('dicancel');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response;
        setImage(source);
      }
    });
  };
  const toast = () => {
    ToastAndroid.show('Add menu success', ToastAndroid.TOP, ToastAndroid.LONG);
  };

  return (
    <>
      {menu.pendingEdit === null ? null : menu.pendingEdit ? (
        <ActivityIndicator size="large" color="#EB5323" style={style.loading} />
      ) : null}
      <View style={style.container}>
        <View style={style.title}>
          <TouchableOpacity
            style={style.goBack}
            onPress={() => {
              dispatch(getMenuCreator());
              navigation.navigate('home');
            }}>
            <Icon name="arrowleft" color="white" size={25} />
          </TouchableOpacity>
          <Text style={style.titleText}>Edit your menu</Text>
        </View>
        <View style={style.form}>
          <View style={style.imgPicker}>
            {press ? (
              <Image source={image} style={style.pic} />
            ) : (
              <Image source={{uri: menu.editData.picture}} style={style.pic} />
            )}
            <Icon
              name="edit"
              size={25}
              style={{alignSelf: 'flex-end'}}
              onPress={() => {
                setPress(true);
                handleChoose();
              }}
            />
          </View>
          <Input
            placeholder="name"
            onChangeText={(text) => setName(text)}
            defaultValue={menu.editData.name}
          />
          <Input
            placeholder="price"
            keyboardType="number-pad"
            onChangeText={(num) => setPrice(num)}
            // defaultValue={priceStr}
          />
          <View style={style.catName}>
            <Text style={{marginLeft: 10, fontWeight: 'bold'}}>Category</Text>
            <Text style={{fontWeight: 'bold', marginLeft: 30, fontSize: 18}}>
              {catName}
            </Text>
            {catName === null ? null : <Fork name="check" />}
          </View>
          <View style={style.category}>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Appetizers');
                setidCategory('1');
              }}>
              <Text style={{color: 'black'}}>Appetizers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Main Dish');
                setidCategory('2');
              }}>
              <Text style={{color: 'black'}}>Main Dish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Dessert');
                setidCategory('3');
              }}>
              <Text style={{color: 'black'}}>Dessert</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.item}
              onPress={() => {
                setCatName('Beverage');
                setidCategory('4');
              }}>
              <Text style={{color: 'black'}}>Beverage</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.addBtn}
            onPress={() => {
              if (
                name === null &&
                image === null &&
                price === null &&
                id_category === null
              ) {
                return null;
              } else {
                dispatch(
                  editDataCreator(
                    name,
                    image,
                    price,
                    id_category,
                    menu.editData.id_menu,
                  ),
                );
              }
            }}>
            <Text style={style.add}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Edit;
