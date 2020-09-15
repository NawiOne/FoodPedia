import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from '../style/login';
import background from '../image/berry.jpg';
import logo from '../image/spoon.png';

const Register = ({navigation}) => {
  return (
    <View style={style.container}>
      <ImageBackground source={background} style={style.image}>
        <View style={style.content}>
          <View style={style.form}>
            <View style={style.logo}>
              <View style={style.spoon}>
                <Image source={logo} style={style.logoImg} />
              </View>
              <Text style={style.login}>FOODPEDIA</Text>
            </View>
            <TextInput placeholder="username" style={style.register} />
            <TextInput placeholder="email" style={style.register} />
            <TextInput
              textContentType="password"
              placeholder="password"
              secureTextEntry={true}
              style={style.register}
            />
            <TextInput
              textContentType="password"
              placeholder="confirm password"
              secureTextEntry={true}
              style={style.register}
            />
            <TouchableOpacity style={style.btnRegis}>
              <Text>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.regis}
              onPress={() => navigation.navigate('login')}>
              <Text style={style.loginRegis}>Have an account? Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
