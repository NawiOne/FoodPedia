/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getMenuCreator, addCartCreator} from '../redux/actions/menu';
import {Text, View, Image, TextInput, FlatList, ScrollView, TouchableOpacity} from 'react-native';
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
    console.log(menu.cart)
    return (
        <View style={style.container}>
            <View style={style.top}>
                <Image source={{ uri:'https://images.unsplash.com/photo-1578338705925-51b521fb2e3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'}} style={style.topImg}/>
            </View>
            <ScrollView style={style.listCont} showsVerticalScrollIndicator ={false}>
            {   food.length ?
                food.map((item, index) =>{
                return (
                    <View style={style.list} key={index}>
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
                            <Text style={style.cartText}>Add to cart</Text>
                        </TouchableOpacity>
                     </View>
                );
            })
            : <View style={style.empty}>
                 <Text>Menu is not available</Text>
            </View>

            }
            </ScrollView>

        </View>
    );
};

export default DetailFood;


