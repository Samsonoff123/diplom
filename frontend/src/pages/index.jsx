import { StyleSheet, View, Text } from 'react-native';
import Login from './Login';
import Product from './Product';
import Registration from './Registration'
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styles } from '../../global.style'
import { Svg, Path } from 'react-native-svg';
import Profile from './Profile';

export default function Index() {
  const token = useSelector(store => store.users.users.items.token)

  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(()=>{
    if (token) {
        setIsAuth(true)
        alert('Вы успешно вошли')
    }
  }, [token])

  return (
      <NativeRouter>
        <Routes>
            <Route path="/" element={!isAuth ? <Login /> : <Product isAuth={isAuth} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Registration />} />
        </Routes>
        {
          isAuth ? 
          <View style={styles.header}>
          <Link style={styles.header__link} to="/">
            <Svg style={styles.header__text} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#85586F" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
              <Path d="M5 12l-2 0l9 -9l9 9l-2 0"></Path>
              <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></Path>
              <Path d="M10 12h4v4h-4z"></Path>
            </Svg>
          </Link>
          {
            !isAuth &&
            <Link style={styles.header__link} to="/login">
              <Svg style={styles.header__text} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#85586F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></Path>
                <Path d="M20 12h-13l3 -3m0 6l-3 -3"></Path>
              </Svg>
            </Link>
          }
          {
            isAuth &&
            <Link style={styles.header__link} to="/profile">
              <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#85586F" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></Path>
                <Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></Path>
                <Path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></Path>
              </Svg>
            </Link>
          }
        </View>
        : null
        }

      </NativeRouter>
  );
}