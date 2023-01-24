import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
        <View style={styles.flex}>
            <View style={styles.element}>
                <Text>Login:</Text>
                <TextInput style={styles.text__input} />
            </View>
            <View style={styles.element}>
                <Text>Password:</Text>
                <TextInput style={styles.text__input} />
            </View>
        </View>

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
  }
});