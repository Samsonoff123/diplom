import axios from "axios";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/slices/login";
import { styles } from "../../global.style";
import { Link } from "react-router-native";
import { Circle, Path, Rect, Svg } from "react-native-svg";
import { Toast } from 'toastify-react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRed, setPasswordRed] = useState(false);
  const [emailRed, setEmailRed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (email !== "" && password !== "") {
      if (password.split("").length < 3) {
        setPasswordRed(true);
      }
      if (!email.includes("@")) {
        setEmailRed(true);
      }

      if (!passwordRed && !emailRed) {
        setIsLoading(true)
        const data = await dispatch(
          fetchUser({
            email,
            password,
          })
        )
        if (data.error) {
          Toast.error("Логин және/немесе құпия сөз дұрыс емес");
        } else {
          Toast.success('Сіз жүйеге кірдіңіз')
        }
        setIsLoading(false)
      }
    }
  };

  return (
    <View style={styles.container}>
      {
        isLoading && 
          <Spinner
            visible={true}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
      }
      <View
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 'auto'
        }}
      >
        <Link to="/">
          <Svg
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle
              cx="18.5"
              cy="18.5"
              r="17.5"
              stroke="black"
              stroke-width="2"
            />
            <Path
              d="M29 18.0001C29 18.5606 28.658 19.0238 28.2143 19.0971L28.0909 19.1072L12.1103 19.1064L17.8836 26.1084C18.2394 26.5398 18.2406 27.2408 17.8864 27.6741C17.5643 28.0679 17.0594 28.105 16.7029 27.7844L16.6007 27.6774L9.26741 18.7853C9.22051 18.7284 9.17978 18.6668 9.1452 18.6018C9.13544 18.5823 9.1255 18.5623 9.11608 18.5419C9.10741 18.5244 9.09958 18.5062 9.09219 18.4878C9.08192 18.4611 9.0719 18.4335 9.06279 18.4053C9.0554 18.3836 9.04922 18.3624 9.04359 18.3411C9.03689 18.3147 9.03038 18.2866 9.02478 18.258C9.02062 18.238 9.01733 18.2188 9.01445 18.1996C9.01041 18.1709 9.00697 18.1412 9.00451 18.1112C9.00239 18.0882 9.00112 18.0655 9.00041 18.0428C9.00023 18.0291 9 18.0146 9 18.0001L9.00045 17.9573C9.00115 17.9355 9.00237 17.9138 9.00411 17.8922L9 18.0001C9 17.9303 9.00531 17.8619 9.01548 17.7957C9.01783 17.7798 9.02064 17.7636 9.02375 17.7474C9.03021 17.7141 9.03767 17.682 9.04626 17.6505C9.05048 17.6349 9.0554 17.6182 9.06065 17.6016C9.07127 17.5683 9.08282 17.5365 9.09552 17.5056C9.10142 17.4911 9.10803 17.4758 9.11495 17.4608C9.12631 17.4362 9.13802 17.4128 9.15039 17.39C9.15912 17.3739 9.16879 17.3571 9.17889 17.3406L9.18676 17.3279C9.21125 17.2889 9.23782 17.252 9.26627 17.2173L9.26736 17.2163L16.6007 8.32264C16.9564 7.89119 17.532 7.89264 17.8863 8.32588C18.2084 8.71974 18.2367 9.33486 17.9719 9.7676L17.8837 9.89154L12.1127 16.8922L28.0909 16.8931C28.593 16.8931 29 17.3887 29 18.0001Z"
              fill="black"
            />
          </Svg>
        </Link>
        <View></View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          transform: [{translateY: 30}],
        }}
      >
        <View>
          <Text style={styles.login_text__bold}>Hello, Welcome Back</Text>
          <Text style={styles.span}>
            Кіру /{" "}
            <Link to="/reg">
              <Text style={styles._link}>Тіркелу</Text>
            </Link>
          </Text>
        </View>
        <Image
          style={styles.login__image}
          source={require(`../assets/loginpage.png`)}
        />
      </View>

      <View style={styles.flex}>
        <View style={styles.element}>
          <Text style={styles.label}>Email адрес</Text>
          <TextInput
            onChange={(e) => {
              setEmail(e.nativeEvent.text.toLowerCase());
              setEmailRed(false);
            }}
            style={
              emailRed
                ? { ...styles.text__input, ...styles._red }
                : styles.text__input
            }
          />
        </View>
        <View style={styles.element}>
          <Text style={styles.label}>Құпия сөз</Text>
          <TextInput
            secureTextEntry={true}
            onChange={(e) => {
              setPassword(e.nativeEvent.text);
              setPasswordRed(false);
            }}
            style={
              passwordRed
                ? { ...styles.text__input, ...styles._red }
                : styles.text__input
            }
          />
        </View>
        <Text style={styles.fogot__pass}>
          Құпия сөзіңізді ұмыттыңыз ба?
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.button__text}>Кіру</Text>
      </TouchableOpacity>
    </View>
  );
}
