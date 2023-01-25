import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendData = () => {
    console.log({
      email,
      password
    });
    axios.post('http://10.0.2.2/api/user/login', {
      email,
      password
    }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }
  
  return (
    <View style={styles.container}>
        <View style={styles.flex}>
            <View style={styles.element}>
                <Text>Login:</Text>
                <TextInput onChange={e => setEmail(e.nativeEvent.text)} style={styles.text__input} />
            </View>
            <View style={styles.element}>
                <Text>Password:</Text>
                <TextInput onChange={e => setPassword(e.nativeEvent.text)} style={styles.text__input} />
            </View>
        </View>
        <Button
         title="send"
         color="#841584"
         style={styles.button}
         onPress={sendData}
        />
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
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  element: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  text__input: {
    borderBottomColor: 'black',
    borderBottomWidth: '3px',
    marginLeft: 10,
    paddingBottom: 2,
    width: 100,
    display: 'block'
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
  }
});