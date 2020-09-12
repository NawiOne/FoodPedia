/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMenuCreator} from '../redux/actions/menu';
import style from '../style/cart';
import background from '../image/berry.jpg';
import logo from '../image/spoon.png';

const Cart = ({navigation}) => {
    const {menu} = useSelector((state) => state);
    console.log('ini adalah menu di cart', menu);
    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.logoName}>
                    <View style={style.logo}>
                        <Fork name="food-fork-drink" size={15} color="white" />
                    </View>
                    <Text style={style.brandName}>FoodPedia</Text>
                </View>
                <View style={style.trash}>
                    <Icon name="trash" size={23} />
                </View>
            </View>
            <View style={style.title}>
                <Text style={style.shopBag}>MY shopping bag</Text>
                <Text style={style.qty}>3 items add</Text>
            </View>
            <ScrollView style={style.listContainer}>
                <View style={style.list} >
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg' }} style={style.listPic} />
                    <View style={style.desc}>
                        <Text>Salmon</Text>
                        <Text>Rp. </Text>
                    </View>
                    <TouchableOpacity style={style.cart} >
                        <Text style={style.cartText}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};



export default Cart;


