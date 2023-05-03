import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../global.style";
import { Icon } from "@react-native-material/core";

export default function StartPage() {
  return (
    <View style={styles.container}>
      <View style={styles.startPage}>
        <View>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.h3}>Ағылшын тілін</Text>
              <Text style={styles.h3}>бізбен үйрен</Text>
            </View>
            <Icon name="penguin" size={50} color="black"/>
          </View>
          <Text style={styles.span}>Language is a theater ​of which words are the actors. © Ferdinand Brunetière</Text>
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
