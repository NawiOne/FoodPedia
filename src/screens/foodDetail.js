/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMenuCreator, addCartCreator} from '../redux/actions/menu';
import {Text, View, Image, ScrollView, TouchableOpacity, CheckBox} from 'react-native';
import Order from '../components/order';
import style from '../style/foodDetail';

const DetailFood = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenuCreator());
    }, [dispatch]);
    const {menu} = useSelector((state) => state);
    const food = menu.data.filter((item) => {
        return item.name_category === menu.nameCategory.name_category;
    });
    const cartId = menu.cart.map((item) =>{
        return item;
    });
const check = menu.data.filter((item) =>{
    return item.id_menu === cartId.id_menu;
});
    console.log('ini adlah cartId', cartId);
    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={{ uri:'https://images.unsplash.com/photo-1578338705925-51b521fb2e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}} style={style.topImg}/>
            </View>
            <ScrollView style={style.listCont} showsVerticalScrollIndicator ={false}>
            {   food.length ?
                food.map((item, index) =>{
                return (
                    <TouchableOpacity press style={style.list} key={index} onPress={() =>
                    dispatch(addCartCreator(
                        item.id_menu,
                                  item.name,
                                  item.price,
                                  item.picture,
                    ))}>
                        <Image source={{uri: item.picture}} style={style.listPic} />
                        <View style={style.desc}>
                            <Text>{item.name}</Text>
                            <Text>Rp. {item.price}</Text>
                        </View>
                        <TouchableOpacity style={ style.cart} onPress={() =>{
                            dispatch(
                                addCartCreator(
                                  item.id_menu,
                                  item.name,
                                  item.price,
                                  item.picture,
                                ),
                              );
                        }}>
                            <Text style={style.cartText}>Add +</Text>
                        </TouchableOpacity>
                     </TouchableOpacity>
                );
            })
            : <View style={style.empty}>
                 <Text>Menu is not available</Text>
            </View>

            }
            </ScrollView>
            {menu.cart.length ? <Order navigation={navigation}/> : null}
        </View>
    );
};

export default DetailFood;


