import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { styles } from '../../global.style';

export default function Product({isAuth}) {

    return (
        <View style={styles.container}>

            {/* <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide}>
                    <Image
                        style={styles.slide__image}
                        source={require(`../assets/slide0.jpg`)} 
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        style={styles.slide__image}
                        source={require(`../assets/slide1.jpg`)} 
                    />
                </View>
                <View style={styles.slide}>
                    <Image
                        style={styles.slide__image}
                        source={require(`../assets/slide2.jpg`)} 
                    />
                </View>
            </Swiper> */}
            <Text>product page</Text>
        </View>
    )
}
