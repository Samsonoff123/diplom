import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/login';
import { styles } from '../../global.style'
import { Link } from 'react-router-native';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRed, setPasswordRed] = useState(false)
  const [emailRed, setEmailRed] = useState(false)
  const dispatch = useDispatch()

  const handleClick = async() => {
    if (email !== '' && password !== '') {
      if (password.split('').length < 3) {
        setPasswordRed(true)
      }
      if (!email.includes('@')) {
        setEmailRed(true)
      }

      if (!passwordRed && !emailRed) {
        const data = await dispatch(fetchUser({
          email,
          password,
        }))
        if (data.error) {
          alert('Неправильный логин или пароль')
        }
      }
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text__bold}>Войдите / <Link to="/reg"><Text style={styles._link}>Зарегестрируйтесь</Text></Link></Text>
        <View style={styles.flex}>
            <View style={styles.element}>
                <Text style={styles.text}>email:</Text>
                <TextInput
                 onChange={(e) => {setEmail(e.nativeEvent.text); setEmailRed(false)}} 
                 style={ emailRed ? {...styles.text__input, ...styles._red} : styles.text__input}
                />
            </View>
            <View style={styles.element}>
                <Text style={styles.text}>password:</Text>
                <TextInput
                 secureTextEntry={true} 
                 onChange={(e) => {setPassword(e.nativeEvent.text); setPasswordRed(false)}} 
                 style={ passwordRed ? {...styles.text__input, ...styles._red} : styles.text__input} 
                />
            </View>
        </View>
        <TouchableOpacity
         style={styles.button}
         onPress={handleClick}
        >
          <Text style={styles.button__text}>Send</Text>
        </TouchableOpacity>
    </View>
  )
}