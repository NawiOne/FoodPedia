import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import style from '../style/home';

import a from '../image/carousel/poster.png';
import b from '../image/carousel/pizza.jpg';
import c from '../image/carousel/mendoan.jpg';
import d from '../image/carousel/burger.jpg';
import e from '../image/carousel/5.jpg';

const {width} = Dimensions.get('window');
const height = width * 0.45;
const images = [a, b, c, d, e];

const Carousel = () => {
  const [active, setactive] = useState(0);
  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setactive(slide);
    }
  };
  return (
    <View style={style.carousel}>
      <ScrollView
        horizontal
        style={{width, height}}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={change}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={(style.carouselImg, {width, height})}
          />
        ))}
      </ScrollView>
      <View style={style.indic}>
        {images.map((i, k) => (
          <Text key={k} style={k === active ? style.dotActive : style.dot}>
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
