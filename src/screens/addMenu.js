import React, {useState} from 'react';
import {Input, ButtonGroup} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import style from '../style/addMenu';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';

const AddMenu = () => {
  // state
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [id_category, setidCategory] = useState(null);
  const [catName, setCatName] = useState(null);
  const [status, setStatus] = useState(128);

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
  const loading = () => {
    return <ActivityIndicator size="large" color="black" />;
  };

  const toast = () => {
    ToastAndroid.show(
      'Add menu success',
      ToastAndroid.CENTER,
      ToastAndroid.SHORT,
    );
  };

  const handleSubmit = () => {
    let data = new FormData();
    data.append('name', name);
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
    data.append('price', price);
    data.append('id_category', id_category);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };
    const url = 'http://54.198.163.118:8000/insert';
    Axios.post(url, data, config)
      .then((res) => {
        console.log(res);
        setStatus(res.status);
        setTimeout(() => setStatus(null), 2000);
      })
      .catch((err) => {
        console.log(err);
      });
    setCatName(null);
    setImage(null);
    setName(null);
    setPrice(null);
  };

  return (
    <>
      {status === 200 ? toast() : null}
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.logoName}>
            <View style={style.logo}>
              <Fork name="food-fork-drink" size={15} color="black" />
            </View>
            <Text style={style.brandName}>FoodPedia</Text>
          </View>
        </View>
        <View style={style.title}>
          <Text style={style.titleText}>Add your menu</Text>
        </View>
        <View style={style.form}>
          <View style={style.imgPicker}>
            <TouchableOpacity
              style={style.pick}
              onPress={() => {
                handleChoose();
              }}>
              {image === null ? (
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  Select picture{' '}
                </Text>
              ) : (
                <Text style={{fontWeight: 'bold', color: 'black'}}>Change</Text>
              )}
            </TouchableOpacity>
            <Image source={image} style={style.pic} />
          </View>
          <Input
            placeholder="name"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <Input
            placeholder="price"
            keyboardType="numeric"
            onChangeText={(num) => setPrice(num)}
            value={price}
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
              handleSubmit();
            }}>
            <Text style={style.add}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddMenu;
