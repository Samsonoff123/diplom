import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Login from './Login';
import Product from './Product';
import Registration from './Registration'
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Profile from './Profile';
import StartPage from './StartPage';
import Header from '../components/Header'
import ToastManager, { Toast } from 'toastify-react-native';

export default function Index() {
  const userItem = useSelector(store => store.users.items)
  const [token, setToken] = useState()
  const [isAuth, setIsAuth] = useState(false)
  
  useEffect(()=>{
    setIsAuth(false)
    if (userItem) {
        setIsAuth(true)
        setToken(userItem.token)
        Toast.success('Вы успешно вошли')
    }
  }, [userItem])
 
  if (!isAuth) {
    return (
      <NativeRouter>
        <ToastManager />
        <View style={{ backgroundColor: 'white', height: '100%'}}>
          <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="*" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Registration />} />
            </Routes>
        </View>
      </NativeRouter>
    )
  }

  return (
      <NativeRouter>
        <ToastManager />
        <ScrollView style={{ backgroundColor: 'white', height: '80%'}}>
          <Routes>
              <Route path="*" element={<Product isAuth={isAuth} />} />
              <Route path="/profile" element={<Profile user={userItem} />} />
          </Routes>
        </ScrollView>

        <Header isAuth={isAuth}></Header>

      </NativeRouter>
  );
}