import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from "react-router-native";

export default function Product({isAuth}) {

    if (isAuth) {
        return (
            <View style={styles.container}>
                <Text>Прежде чем начать, пожалуиста войдите или зарегестрируйте свою учетную запись</Text>
                <Link style={styles.link__button} to="/login">
                    <Text style={styles.link__button__text}>login</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link__button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10
  },
  link__button__text: {
    color: '#fff',
  }
});