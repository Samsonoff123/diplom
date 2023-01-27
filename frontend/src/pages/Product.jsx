import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from "react-router-native";
import { styles } from '../../global.style';

export default function Product({isAuth}) {

    if (!isAuth) {
        return (
            <View style={styles.container}>
                <Text style={{marginBottom: 20}}>Прежде чем начать, пожалуиста войдите или зарегестрируйте свою учетную запись</Text>
                <Link style={styles.button} to="/login">
                    <Text style={styles.button__text}>login</Text>
                </Link>
            </View>
            )
    }

    return (
        <View style={styles.container}>
            <Text>product page</Text>
            <StatusBar style="auto" />
        </View>
    )
}
