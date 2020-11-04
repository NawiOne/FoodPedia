import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {registerCreator} from '../redux/actions/auth';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import style from '../style/login';
import background from '../image/berry.jpg';
import logo from '../image/spoon.png';

const Register = ({navigation}) => {
  const {auth} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [msg, setMsg] = useState(null);
  console.log(user, email, password);

  const handleSubmit = () => {
    if (user === null || email === null || password === null) {
      setMsg('username/email/password cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 4000);
    } else if (user === '' || email === '' || password === '') {
      setMsg('username/email/password/ cannot be empty');
      setTimeout(() => {
        setMsg(null);
      }, 4000);
    } else {
      setMsg(null);
      dispatch(registerCreator(user, password, email));
      if (auth.isLogin === false) {
        setPassword(null);
        setUser(null);
        setEmail(null);
        setMsg(auth.data);
      }
    }
  };

  useEffect(() => {
    if (auth.isLogin) {
      setPassword(null);
      setUser(null);
      setMsg(null);
      return navigation.navigate('bottomtab');
    } else if (auth.isLogin === false) {
      setMsg(auth.data);
      setTimeout(() => {
        setMsg(null);
      }, 4000);
    }
  }, [auth]);

  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <ImageBackground source={background} style={style.image}>
        <View style={style.content}>
          <ScrollView style={style.form} showsVerticalScrollIndicator={false}>
            <View style={style.logo}>
              <View style={style.spoon}>
                <Image source={logo} style={style.logoImg} />
              </View>
              <Text style={style.login}>FOODPEDIA</Text>
            </View>
            {auth.isPending ? (
              <ActivityIndicator
                color="red"
                style={style.indicator}
                size="large"
              />
            ) : null}
            {msg === null ? null : (
              <View style={style.error}>
                <Text style={style.errText}>{msg}</Text>
              </View>
            )}
            <TextInput
              placeholder="username"
              style={style.register}
              onChangeText={(text) => setUser(text)}
              value={user}
            />
            <TextInput
              placeholder="email"
              style={style.register}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              textContentType="password"
              placeholder="password"
              secureTextEntry={true}
              style={style.register}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity
              style={style.btnRegis}
              onPress={() => handleSubmit()}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.regis}
              onPress={() => navigation.navigate('login')}>
              <Text style={style.loginRegis}>Have an account? Login</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Register;
