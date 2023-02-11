import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../global.style";

export default function StartPage() {
  return (
    <View style={styles.container}>
      <View style={styles.startPage}>
        <View>
          <Text style={styles.h3}>Ағылшын тілін</Text>
          <Text style={styles.h3}>бізбен үйрен</Text>
          <Text style={styles.span}>какой-то текст, как приветствие</Text>
        </View>
        <Image
          style={styles.start__image}
          source={require(`../assets/startpage.png`)}
        />
        <View style={styles.button__group}>
          <Link to="/reg" style={styles.button}>
            <Text style={styles.button__text}>Get Started/Бастау</Text>
          </Link>
          <View style={{ marginTop: 10 }}></View>
          <Link to="/login" style={styles.button}>
            <Text style={styles.button__text}>Аккаунт бар</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
