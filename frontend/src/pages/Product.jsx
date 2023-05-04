import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { Link, useNavigate } from 'react-router-native';
import { styles } from '../../global.style';

export default function Product({isAuth}) {
    const navigate = useNavigate()
    return (
        <>
            <View style={[styles.container, {paddingTop: 0, paddingBottom: 0, backgroundColor: 'rgba(119, 31, 152, 0.3)'}]}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.swiper}>
                        <Swiper style={styles.wrapper} autoplayTimeout={3} showsButtons={false} loop autoplay showsPagination={false}>
                            <View>
                                <Image
                                    style={styles.slide__image}
                                    source={require(`../assets/slide0.jpg`)} 
                                />
                            </View>
                            <View>
                                <Image
                                    style={styles.slide__image}
                                    source={require(`../assets/slide1.jpg`)} 
                                />
                            </View>
                            <View>
                                <Image
                                    style={styles.slide__image}
                                    source={require(`../assets/slide2.jpg`)} 
                                />
                            </View>
                            <View>
                                <Image
                                    style={styles.slide__image}
                                    source={require(`../assets/slide3.jpg`)} 
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>
            </View>
            <View style={styles.products}>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/games')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/gamepad.png')} />
                        <Text style={[styles.products__icon__text]}>Ойындар</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/tests')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/test.png')} />
                        <Text style={[styles.products__icon__text]}>Тесттер</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/products')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/courses.png')} />
                        <Text style={[styles.products__icon__text]}>Курстар</Text>
                    </View>
                </TouchableOpacity>
            </View> 
            <Image style={styles.products__bottom_img} source={require('../assets/tbbt.png')} />
        </>
    )
}
