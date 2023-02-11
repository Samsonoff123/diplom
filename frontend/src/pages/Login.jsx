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
        );
        if (data.error) {
          Toast.error("Ошибочный логин/пароль");
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
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 100, width: '100%'}}>
        <View style={styles.line}/>
        <Text style={styles.span}>арқылы кіру</Text>
        <View style={styles.line} />
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', maxWidth: 150, marginTop: 40, marginBottom: 20}}>
          <TouchableOpacity onPress={() => Linking.openURL('http://vk.ru')}>
            <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Rect width="23" height="23" rx="9" fill="#1A76FF"/>
              <Path d="M10.1911 13.4568V7.66666H12.4392V10.8735C14.2377 10.6597 15.3742 8.64652 15.7177 7.66666H18.0594C17.7784 9.71547 15.9206 11.2892 14.9683 11.7643C16.5607 12.2542 18.5278 14.6148 18.5278 15.951H16.0924C15.1931 13.6706 13.2823 12.9817 12.4392 12.9223V15.951C7.14685 16.3073 4.33674 12.1206 4.47725 7.66666H6.819C6.95952 11.8534 9.2076 13.1005 10.1911 13.4568Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
            <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M21 11.9574C21 11.1702 20.9305 10.5957 20.7801 10H11V13.5532H16.7407C16.625 14.4362 16 15.7659 14.6111 16.6595L14.5916 16.7785L17.6839 18.9803L17.8981 19C19.8657 17.3298 21 14.8723 21 11.9574Z" fill="#4285F4"/>
              <Path d="M10.7629 22C13.7135 22 16.1907 21.1135 18 19.5845L14.5514 17.1468C13.6286 17.734 12.39 18.144 10.7629 18.144C7.8729 18.144 5.42006 16.4044 4.54569 14L4.41753 14.0099L1.04412 16.3922L1 16.5041C2.79712 19.7617 6.48856 22 10.7629 22Z" fill="#34A853"/>
              <Path d="M5 13.4963C4.75516 12.8759 4.61346 12.2111 4.61346 11.5243C4.61346 10.8374 4.75516 10.1727 4.98712 9.55229L4.98063 9.42016L1.3557 7L1.2371 7.0485C0.45104 8.4001 0 9.9179 0 11.5243C0 13.1307 0.45104 14.6484 1.2371 16L5 13.4963Z" fill="#FBBC05"/>
              <Path d="M10.7212 3.85593C12.7646 3.85593 14.1429 4.66479 14.9289 5.34074L18 2.5928C16.1139 0.986155 13.6593 0 10.7212 0C6.46514 0 2.78946 2.23821 1 5.49581L4.51848 8C5.40121 5.59557 7.84358 3.85593 10.7212 3.85593Z" fill="#EB4335"/>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('http://facebook.com')}>
            <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M25 12.5C25 5.5957 19.4043 0 12.5 0C5.5957 0 0 5.5957 0 12.5C0 18.7397 4.56836 23.9111 10.5479 24.8491V16.1162H7.37647V12.5H10.5479V9.74658C10.5479 6.61621 12.4106 4.88379 15.2671 4.88379C16.6367 4.88379 18.0684 5.13037 18.0684 5.13037V8.20557H16.4932C14.9385 8.20557 14.459 9.17139 14.459 10.1577V12.5H17.9248L17.3701 16.1162H14.459V24.8491C20.4316 23.9111 25 18.7397 25 12.5Z" fill="#1877F2"/>
              <Path d="M17.3628 16.1162L17.918 12.5H14.4521V10.1577C14.4521 9.17139 14.9385 8.20557 16.4863 8.20557H18.0615V5.13037C18.0615 5.13037 16.6299 4.88379 15.2603 4.88379C12.4043 4.88379 10.541 6.6167 10.541 9.74658V12.5H7.36963V16.1162H10.541V24.8491C11.1782 24.9517 11.8286 25 12.4932 25C13.1577 25 13.8081 24.9453 14.4453 24.8491V16.1162H17.3628Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('http://whatsapp.com')}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M0.5 23.5L2.1502 17.3696C0.819354 14.9815 0.396532 12.1948 0.95932 9.52087C1.52211 6.84692 3.03275 4.46509 5.21405 2.81244C7.39535 1.15979 10.101 0.347189 12.8345 0.523741C15.568 0.700294 18.1459 1.85416 20.0953 3.7736C22.0447 5.69305 23.2348 8.24932 23.4472 10.9733C23.6595 13.6974 22.8799 16.4064 21.2514 18.6033C19.6229 20.8003 17.2548 22.3378 14.5815 22.9337C11.9082 23.5296 9.10919 23.144 6.69799 21.8475L0.5 23.5ZM6.99684 19.5535L7.38015 19.7803C9.12664 20.8128 11.1665 21.2401 13.1819 20.9956C15.1972 20.751 17.0749 19.8483 18.5222 18.4282C19.9696 17.0081 20.9053 15.1503 21.1836 13.1444C21.4618 11.1384 21.067 9.09699 20.0607 7.33821C19.0544 5.57943 17.493 4.2021 15.62 3.42085C13.7469 2.6396 11.6674 2.49831 9.7054 3.01901C7.74344 3.53971 6.00927 4.69315 4.77313 6.29958C3.53699 7.906 2.86833 9.87518 2.87135 11.9002C2.8697 13.5793 3.33526 15.226 4.21619 16.6568L4.45658 17.0521L3.53402 20.4737L6.99684 19.5535Z" fill="#00D95F"/>
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M16.3001 13.4744C16.0754 13.2936 15.8123 13.1663 15.5309 13.1023C15.2494 13.0383 14.957 13.0392 14.6759 13.105C14.2536 13.28 13.9808 13.9409 13.7079 14.2714C13.6504 14.3507 13.5658 14.4062 13.4701 14.4277C13.3744 14.4492 13.2742 14.4351 13.1881 14.3881C11.6421 13.7841 10.3462 12.6765 9.51094 11.2451C9.43969 11.1558 9.40597 11.0424 9.41688 10.9288C9.42779 10.8152 9.48247 10.7102 9.56941 10.636C9.87374 10.3355 10.0972 9.96325 10.2191 9.55377C10.2462 9.1021 10.1424 8.6522 9.92024 8.25771C9.74847 7.70465 9.42158 7.21219 8.97819 6.83852C8.74951 6.73593 8.49594 6.70153 8.24809 6.73947C8.00024 6.77742 7.76869 6.88609 7.58137 7.05237C7.25619 7.33222 6.99807 7.68126 6.82604 8.07379C6.65402 8.46632 6.57245 8.89234 6.58736 9.32048C6.58836 9.56091 6.61891 9.8003 6.67831 10.0333C6.82917 10.5932 7.06118 11.128 7.36698 11.621C7.58761 11.9986 7.82834 12.3642 8.08813 12.7162C8.93242 13.8722 9.99372 14.8538 11.2131 15.6064C11.825 15.9888 12.479 16.2998 13.1622 16.5331C13.8718 16.8539 14.6554 16.9771 15.4296 16.8895C15.8707 16.8229 16.2886 16.6492 16.6466 16.3836C17.0046 16.1181 17.2917 15.7688 17.4826 15.3666C17.5947 15.1236 17.6288 14.852 17.58 14.589C17.4631 14.0511 16.7419 13.7336 16.3001 13.4744Z" fill="#00D95F"/>
            </Svg>
          </TouchableOpacity>
      </View>
    </View>
  );
}
