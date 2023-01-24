import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Login from './src/pages/Login'
import Product from './src/pages/Product';
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import {AsyncStorage} from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(()=> {
    if (AsyncStorage.getItem('token')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, [])

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Link style={styles.header__link} to="/">
          <Text>main</Text>
        </Link>
        <Link style={styles.header__link} to="/login">
          <Text>login</Text>
        </Link>
      </View>
        <Routes>
          <Route path="/" element={<Product isAuth={isAuth} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 30,
  },
  header__link: {
    display: 'block',
    padding: 10,
    marginRight: 10
  }
});
