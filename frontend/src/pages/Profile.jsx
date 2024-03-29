import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../../global.style'
import { launchImageLibrary } from 'react-native-image-picker'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/login';
import { useNavigate } from 'react-router-native';
import { Icon } from '@react-native-material/core';

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
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity onPress={uploadImage}>
                            <Image
                                style={styles.image__holder}
                                source={image ? user.user.img : require('../assets/avatar_placeholder.jpg')} 
                            />
                        </TouchableOpacity>
                    
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Аты-жөні: </Text>{user.user.name}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>E-mail: </Text>{user.user.email}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Туған күні: </Text>{user.user.age}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Жасы: </Text>{age}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Деңгейі: </Text>{user.user.level}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Прогресс: </Text>{user.user.progress ?? 'A1'}</Text>
                        <Text style={styles.text__profile}><Text style={styles.text__b}>Рөлі: </Text>{user.user.role}</Text>
                    </View>
                    <View style={{borderColor: '#000', borderWidth: 1, borderRadius: 25, padding: 20, marginBottom: 40, marginTop: 20}}>
                        <Text style={[styles.text__bold, {textAlign: 'center'}]}>Кері байланыс</Text>
                        <Text style={{maxWidth: 350, fontSize: 16}}>Қолданбаны жақсарту туралы ұсынысыңыз бар ма?</Text>
                        <Text style={{maxWidth: 350, fontSize: 16, marginBottom: 10}}>Бізбен байланысыңыз!</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('mailto:Orynbassarskaya@gmail.com?subject=SendMail&body=Бұл хабар "LearnEng" қолданбасынан жіберілді.') }
                                style={{alignItems: 'center'}}
                            >
                                <Icon name="email-outline" size={50} color="#000" />
                                <Text style={{fontWeight: 'bold'}}>Почта</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Linking.openURL('tel:+77767968414') }
                                style={{alignItems: 'center'}}
                                >
                                <Icon name="phone-outline" size={50} color="#000" />
                                <Text style={{fontWeight: 'bold'}}>Телефон</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{...styles.button, alignSelf: 'center'}}
                        onPress={handleExit}
                    >
                        <Text style={styles.button__text}>Шығу</Text>
                    </TouchableOpacity>
                </View>
            : <Text>Мәлімет жоқ</Text>
        }

    </View>
  );
}
