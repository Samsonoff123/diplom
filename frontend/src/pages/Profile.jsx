import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../global.style'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/login';
import { useNavigate } from 'react-router-native';

export default function Profile({user}) {
    const [age, setAge] = useState(0)
    const [image, setImage] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.user.age) {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

           let userDay = +user.user.age.split(".")[0]
           let userMonth = +user.user.age.split(".")[1]
           let userYear = +user.user.age.split(".")[2]

           if (userMonth > mm) {
            setAge(yyyy - userYear - 1)
            if (userDay > dd) {
                setAge(yyyy - userYear - 1)
            }
           } else {
                setAge(yyyy - userYear)
           }
        }
        if (user.user.img.includes('http')) {
            setImage(user.user.img)
        }
    }, [user])

    const uploadImage = async() => {
        const options = {
            title: 'Select image',
            type: 'library',
            options: {
                maxHeight: 200,
                maxWidth: 200,
                selectionLimit: 1,
                mediaType: 'photo',
                includeBase64: false
            }
          }
        const images = await launchImageLibrary(options)
        // console.log(images);
    }

    const handleExit = () => {
        dispatch(logout())
        navigate('/')
    }

  return (
    <View style={[styles.container, { paddingTop: 50 }]}>
        <Text style={styles.text__bold}>Профиль</Text>
        {
            user.user ? 
                <View>
                    <TouchableOpacity onPress={uploadImage}>
                        <Image
                            style={styles.image__holder}
                            source={image ? user.user.img : require('../assets/avatar_placeholder.jpg')} 
                        />
                    </TouchableOpacity>

                    <Text style={styles.text__profile}><Text style={styles.text__b}>ФИО: </Text>{user.user.name}</Text>
                    <Text style={styles.text__profile}><Text style={styles.text__b}>Почта: </Text>{user.user.email}</Text>
                    <Text style={styles.text__profile}><Text style={styles.text__b}>Дата рождения: </Text>{user.user.age}</Text>
                    <Text style={styles.text__profile}><Text style={styles.text__b}>Возраст: </Text>{age}</Text>
                    <Text style={styles.text__profile}><Text style={styles.text__b}>Роль: </Text>{user.user.role}</Text>
                    <TouchableOpacity
                        style={{...styles.button, alignSelf: 'center'}}
                        onPress={handleExit}
                    >
                        <Text style={styles.button__text}>Выйти</Text>
                    </TouchableOpacity>
                </View>
            : <Text>Нет данных</Text>
        }

    </View>
  );
}