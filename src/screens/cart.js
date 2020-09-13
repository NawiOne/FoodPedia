/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Fork from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {plusQuantityCreator, minQuantityCreator, cancelCartCreator} from '../redux/actions/menu';
import style from '../style/cart';
import background from '../image/berry.jpg';
import logo from '../image/spoon.png';

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const {menu} = useSelector((state) => state);
    const price = menu.cart.map((item) => {
        return item.price * item.quantity;
    });
    const totalPrice = price.reduce((total, index) => {
        return total + index;
    }, 0);
    const plusDelivery = totalPrice + 15000;


    return (
        <View style={style.container}>
            <View style={style.header}>
                <View style={style.logoName}>
                    <View style={style.logo}>
                        <Fork name="food-fork-drink" size={15} color="white" />
                    </View>
                    <Text style={style.brandName}>FoodPedia</Text>
                </View>
                <TouchableOpacity style={style.trash} onPress={() => {
                    dispatch(cancelCartCreator());
                }}>
                {menu.cart.length ? <Icon name="trash-bin" size={23} color="black"/> : <Icon name="trash-bin-sharp" size={23} color="black"/>
                }
                </TouchableOpacity>
            </View>
            <View style={style.title}>
                <Text style={style.shopBag}>MY shopping bag</Text>
                <Text style={style.qty}>{menu.cart.length} items add</Text>
            </View>
            <ScrollView style={style.listContainer} showsVerticalScrollIndicator={false}>
                {
                    menu.cart.map((item, index) => {
                        return (
                            <View style={style.list} key={index} >
                                <Image source={{uri: item.picture}} style={style.listPic} />
                                <View style={style.desc}>
                                    <Text style={style.nameFood}>{item.name}</Text>
                                    <View style={style.handleQty}>
                                        {item.quantity !== 1 ? 
                                            <TouchableOpacity style={style.minus} onPress={() =>
                                                dispatch(minQuantityCreator(item.id_menu))}>
                                                <Text>-</Text>
                                            </TouchableOpacity>
                                            : <TouchableOpacity style={style.minus} onPress={() =>
                                                dispatch(minQuantityCreator(item.id_menu))}>
                                                <Fork name= "trash-can" size={15} color="black"/>
                                            </TouchableOpacity>
                                    }
                                        <View style={style.numQty}><Text>{item.quantity}</Text></View>
                                        <TouchableOpacity style={style.plus} onPress={() => {
                                            dispatch(plusQuantityCreator(item.id_menu));
                                        }}><Text>+</Text></TouchableOpacity>
                                    </View>
                                </View>
                                <TouchableOpacity style={style.cart} >
                                    <Text style={style.cartText}>Rp. {item.price * item.quantity}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
                {
                    menu.cart.length ?
                        <View style={style.checkOut}>
                            <View style={style.totalText}>
                                <Text style={style.text}>Total</Text>
                                <Text style={style.text}>Delivery</Text>
                                <Text style={style.total}>Total</Text>
                                <View style={style.button}>
                                    <Text style={style.btn}>Checkout</Text>
                                </View>
                            </View>
                            <View style={style.totalNum}>
                                <Text style={style.text}>Rp. {totalPrice}</Text>
                                <Text style={style.text}>Rp. 15000</Text>
                                <Text style={style.total}>Rp. {plusDelivery}</Text>
                            </View>
                        </View>
                        : null
                }


            </ScrollView>
        </View>
    );
};



export default Cart;


