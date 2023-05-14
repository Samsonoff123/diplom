import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import { styles } from "../../global.style";
import { Icon } from "@react-native-material/core";

const styles2 = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'}
})

export default function StartPage() {
  return (
    <View style={[styles.container, {backgroundColor: 'rgba(119, 31, 152, 0.3)'}]}>
      <View style={styles.startPage}>
        <View style={{marginBottom: 60}}>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{width: '90%'}}>
              <Text style={[styles.h3, {fontWeight: 0}]}>Ағылшын тілін</Text>
              <Text style={[styles.h3, {width: '100%', textAlign: 'right', fontWeight: 0}]}>бізбен үйрен</Text>
            </View>
          </View>
          <Text style={[styles.span, styles2.italic]}>Language is a theater ​of which words are the actors. © Ferdinand Brunetière</Text>
        </View>
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(119, 31, 152, 0.3)', borderRadius: 9999999, width: 300, height: 300}}>
          <Icon name="penguin" size={200} color="#771F98"/>
         <Text style={[styles.h3, {color: 'white'}]}>LearnEng</Text>
        </View>
        <View style={[styles.button__group, {marginTop: 100}]}>
          <Link to="/reg" style={styles.button}>
            <Text style={styles.button__text}>Бастау</Text>
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
