import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { useNavigate } from 'react-router-native'
import { styles } from '../../../global.style'

export default function index({isAuth}) {
    const navigate = useNavigate()
  return (
    <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigate('/')} style={styles.header__link}>
            <Svg style={styles.header__text} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-2" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#001A72" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
                <Path d="M5 12l-2 0l9 -9l9 9l-2 0"></Path>
                <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></Path>
                <Path d="M10 12h4v4h-4z"></Path>
            </Svg>
        </TouchableOpacity>
        {
        !isAuth &&
        <TouchableOpacity onPress={()=>navigate('/login')} style={styles.header__link}>
            <Svg style={styles.header__text} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#001A72" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
            <Path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></Path>
            <Path d="M20 12h-13l3 -3m0 6l-3 -3"></Path>
            </Svg>
        </TouchableOpacity>
        }
        {
        isAuth &&
        <TouchableOpacity onPress={()=>navigate('/profile')} style={styles.header__link}>
            <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="#001A72" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
            <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></Path>
            <Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></Path>
            <Path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></Path>
            </Svg>
        </TouchableOpacity>
        }
  </View>
  )
}
