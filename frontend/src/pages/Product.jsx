import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Path, Svg, Circle } from 'react-native-svg';
import Swiper from 'react-native-swiper';
import { Link, useNavigate } from 'react-router-native';
import { styles } from '../../global.style';

export default function Product({isAuth}) {
    const navigate = useNavigate()
    return (
        <>
            <View style={[styles.container, {paddingTop: 0, paddingBottom: 0, transform: [{translateY: -15}], backgroundColor: 'rgba(119, 31, 152, 0.3)'}]}>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Svg style={styles.svg__left} width="64" height="382" viewBox="0 0 64 382" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fill-rule="evenodd" clip-rule="evenodd" d="M61.5894 332.413C57.5147 320.245 48.0235 314.072 38.8545 308.109L38.8251 308.09C30.8383 302.892 23.2965 297.981 18.3644 289.163C17.9375 288.396 17.5166 287.639 17.1011 286.891C4.28523 263.827 -3.3982 250 -24.9718 250C-46.5434 250 -54.2491 263.829 -67.0936 286.88C-67.5113 287.63 -67.9345 288.389 -68.3637 289.158C-73.2876 297.973 -80.84 302.891 -88.8132 308.083L-88.8753 308.124L-88.9266 308.157C-98.0887 314.121 -107.55 320.279 -111.635 332.413C-113.228 336.796 -114.03 341.452 -113.999 346.142C-113.999 365.912 -98.9573 382 -82.2931 382C-74.2066 382 -64.8746 379.928 -55.2676 377.795C-45.077 375.533 -34.5769 373.202 -24.9255 373.202C-15.3032 373.202 -4.91794 375.519 5.19349 377.775L5.19358 377.775L5.19406 377.775L5.1944 377.775C14.7859 379.915 24.1311 382 32.3448 382C49.2176 382 63.9999 365.912 63.9999 346.142C64.0131 341.449 63.1958 336.794 61.5894 332.413Z" fill="#664898"/>
                        <Path d="M-25 221C-6.50739 221 24 138.735 24 94C24 49.2649 13.9926 0 -4.50001 0C-22.9927 0 -25 62.2649 -25 107C-25 151.735 -43.4927 221 -25 221Z" fill="#664898"/>
                    </Svg>
                    <View style={styles.swiper}>
                        <Swiper style={styles.wrapper} showsButtons={false} loop autoplay showsPagination={false}>
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
                        </Swiper>
                    </View>
                    <Svg style={styles.svg__right} width="67" height="390" viewBox="0 0 67 390" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M196.503 339.461C191.938 327.273 181.299 321.096 171.028 315.124C162.089 309.923 153.649 305.009 148.13 296.186C132.915 271.747 124.558 257 99.632 257C74.7061 257 66.3231 271.752 51.0718 296.181C45.5472 305.024 37.0656 309.947 28.1172 315.158C17.8459 321.135 7.22712 327.297 2.64657 339.461C0.863811 343.847 -0.033271 348.505 0.000943001 353.198C0.000943001 372.98 16.8344 389.077 35.4834 389.077C54.1325 389.077 78.7005 380.273 99.6839 380.273C120.667 380.273 144.893 389.077 163.775 389.077C182.658 389.077 199.201 372.98 199.201 353.198C199.216 348.502 198.301 343.844 196.503 339.461Z" fill="#664898"/>
                        <Path d="M91.5493 223.164C123.269 215.694 165.259 153.951 155.246 111.437C145.233 68.9222 103.286 6.05635 71.5659 13.5272C39.8459 20.9981 30.3647 95.9766 40.378 138.491C50.3912 181.005 59.8293 230.635 91.5493 223.164Z" fill="#664898"/>
                    </Svg>
                </View>
            </View>
            <View style={[styles.products, {transform: [{translateY: -15}]}]}>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/games')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/gamepad.png')} />
                        <Text style={[styles.products__icon__text]}>Games</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/tests')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/test.png')} />
                        <Text style={[styles.products__icon__text]}>Tests</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.products__button} onPress={()=>navigate('/products')}>
                    <View style={styles.products__icon_main}>
                        <Image style={styles.products__icon} source={require('../assets/courses.png')} />
                        <Text style={[styles.products__icon__text]}>Courses</Text>
                    </View>
                </TouchableOpacity>
            </View> 
            <Image style={styles.products__bottom_img} source={require('../assets/tbbt.png')} />
        </>
    )
}
