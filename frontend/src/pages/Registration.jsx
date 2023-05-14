import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from '../../global.style'
import { useNavigate } from 'react-router-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchUser } from '../redux/slices/login';
import { useDispatch } from 'react-redux';
import { Path, Svg } from 'react-native-svg';
import { Toast } from 'toastify-react-native';
import { KeyboardAvoidingWrapper } from '../components/KeyboardAvoidingWrapper';
import { Icon } from "@react-native-material/core";


export default function Registration() {
    const navigate = useNavigate()
    const botName = "botName"
    const [i, setI] = useState(1)
    const [firstMessage, setFirstMessage] = useState(false)
    const [secondMessage, setSecondMessage] = useState(false)
    const [tempMessage, setTempMessage] = useState('')
    const [name, setName] = useState(false)
    const [age, setAge] = useState(false)
    const [thirdMessage, setThirdMessage] = useState(false)
    const [email, setEmail] = useState(false)
    const [fourthMessage, setFourthMessage] = useState(false)
    const [password, setPassword] = useState(false)
    const [fiveMessage, setFiveMessage] = useState(false)
    const [level, setLevel] = useState(false)
    const [finish, setFinish] = useState(false)

    const [chosenDate, setChosenDate] = useState(new Date());

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            setFirstMessage('Сәлеметсіз бе! Аты-жөніңізді жазыңыз')
        }, 1000)

    }, [])

    useEffect(() => {
        setTempMessage(chosenDate.getDate() + '.' + (chosenDate.getMonth() + 1) + '.' + chosenDate.getFullYear())
    }, [chosenDate])

  const handleClick = () => {
    if (tempMessage !== '') {
        if (i === 1) {
            setName(tempMessage)
            setTimeout(() => {
                setSecondMessage(`Танысқаныма қуаныштымын, ${tempMessage}, туған күніңізді енгізіңіз`)
            }, 500);
        } else if (i === 2) {
            setAge(tempMessage)
            setTimeout(() => {
                setThirdMessage('E-mail жазыңыз')
            }, 500);
        } else if (i === 3) {
            setEmail(tempMessage.includes('@') ? tempMessage : tempMessage + '@mail.ru')
            setTimeout(() => {
                setFourthMessage('Құпия сөз ойлап табыңыз')
            }, 500);
        } else if (i === 4) {
            setPassword(tempMessage)
            setTimeout(() => {
                setFiveMessage('Ағылшын тілін қай деңгейде білесіз?')
            }, 500);
        } else if (i === 5) {
            setLevel(tempMessage)
            setTimeout(() => {
                setFinish('Тіркелім аяқталғанша күте тұрыңыз')
            }, 500);

            

            axios.post(`https://diplom-navy.vercel.app/api/user/registration`, {
                email,
                password,
                name,
                age,
                level: tempMessage
            }).then((res) => {
                dispatch(fetchUser({
                    email,
                    password,
                }))
            }).catch((e) => {
                console.log(e);
                Toast.error('Тіркелу сәтсіз аяқталды')
                navigate('/')
            })
        }
        setTempMessage('')
        setI(i + 1)
    }
  }
  
  return (
    <KeyboardAvoidingWrapper>
      <View style={{ backgroundColor: "#fff", minHeight: "100%" }}>
        <View style={[styles.top__side, styles.shadowProp]}>
          <TouchableOpacity onPress={() => navigate(-1)}>
            <Svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20 10.0001C20 10.5606 19.658 11.0238 19.2143 11.0971L19.0909 11.1072L3.1103 11.1064L8.88362 18.1084C9.23941 18.5398 9.24065 19.2408 8.88639 19.6741C8.56434 20.0679 8.05935 20.105 7.70289 19.7844L7.60074 19.6774L0.26741 10.7853C0.220512 10.7284 0.179777 10.6668 0.145205 10.6018C0.135441 10.5823 0.125502 10.5623 0.116077 10.5419C0.10741 10.5244 0.099577 10.5062 0.0921879 10.4878C0.0819244 10.4611 0.0718975 10.4335 0.0627937 10.4053C0.055397 10.3836 0.049221 10.3624 0.0435867 10.3411C0.0368881 10.3147 0.0303802 10.2866 0.0247841 10.258C0.0206223 10.238 0.0173264 10.2188 0.014452 10.1996C0.0104084 10.1709 0.00696754 10.1412 0.00451279 10.1112C0.00239182 10.0882 0.0011158 10.0655 0.00041008 10.0428C0.000228882 10.0291 0 10.0146 0 10.0001L0.000453949 9.95726C0.00115204 9.93553 0.00237083 9.91382 0.00411224 9.89217L0 10.0001C0 9.93028 0.00531387 9.86193 0.0154762 9.79566C0.0178318 9.77983 0.0206413 9.76358 0.0237503 9.7474C0.0302086 9.71407 0.0376701 9.68198 0.0462627 9.65052C0.0504818 9.63488 0.0553951 9.61818 0.0606461 9.6016C0.07127 9.56829 0.0828171 9.53654 0.09552 9.5056C0.101421 9.49106 0.10803 9.47583 0.114952 9.46076C0.126312 9.43617 0.138016 9.4128 0.150391 9.39003C0.159122 9.37391 0.168791 9.35713 0.178888 9.34061L0.186756 9.32785C0.211248 9.28889 0.237818 9.25196 0.266266 9.21731L0.267357 9.21629L7.60069 0.322641C7.95645 -0.10881 8.53205 -0.107358 8.88634 0.325882C9.20841 0.719738 9.23671 1.33486 8.97191 1.7676L8.88367 1.89154L3.11273 8.89217L19.0909 8.89305C19.593 8.89305 20 9.38872 20 10.0001Z"
                fill="black"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.top__side__text}>Тіркелу</Text>
        </View>
        <View
          style={[
            styles.container,
            { paddingTop: 0, zIndex: 1, flex: 1 },
            styles.shadowProp,
          ]}
        >
          <View style={styles.reg__main}>
            <ScrollView style={styles.message}>
              {firstMessage ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{firstMessage}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {name ? (
                <View style={styles.member__message}>
                  <View style={styles.message__cloud}>
                    <Text style={styles.message__text}>{name}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {secondMessage ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{secondMessage}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {age ? (
                <View style={styles.member__message}>
                  <View style={styles.message__cloud}>
                    <Text style={styles.message__text}>{age}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {thirdMessage ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{thirdMessage}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {email ? (
                <View style={styles.member__message}>
                  <View style={styles.message__cloud}>
                    <Text style={styles.message__text}>{email}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {fourthMessage ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{fourthMessage}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {password ? (
                <View style={styles.member__message}>
                  <View style={styles.message__cloud}>
                    <Text style={styles.message__text}>{password}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {fiveMessage ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{fiveMessage}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {level ? (
                <View style={styles.member__message}>
                  <View style={styles.message__cloud}>
                    <Text style={styles.message__text}>{level}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
              {finish ? (
                <View style={styles.bot__message}>
                  <View style={styles.message__cloud__bot}>
                    <Text>{finish}</Text>
                  </View>
                  <View style={styles.gray}></View>
                </View>
              ) : null}
            </ScrollView>
          </View>
        </View>
        <View style={styles.bottom__side}>
          {secondMessage && !thirdMessage ? (
            <View
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                width: "80%",
              }}
            >
              <DateTimePicker
                mode="date"
                onChange={(e, date) => setChosenDate(date)}
                value={chosenDate}
              />
            </View>
          ) : (
            !fiveMessage && (
              <TextInput
                value={tempMessage}
                onChange={(e) => setTempMessage(e.nativeEvent.text)}
                placeholder="Type here..."
                style={styles.message__input}
              />
            )
          )}

          {fiveMessage && (
            <View style={styles.reg_tabs}>
              <TouchableOpacity
                onPress={() => setTempMessage("Бастапқы")}
                style={[
                  styles.reg_tabs_item,
                  { backgroundColor: "rgba(119, 31, 152, 0.5)" },
                  level === "Бастапқы" ? styles.reg_tabs_item_active : {},
                ]}
              >
                <Text style={{ color: "#fff" }}>Бастапқы</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTempMessage("Орташа")}
                style={[,
                  styles.reg_tabs_item,
                  { backgroundColor: "rgba(119, 31, 152, 0.7)" },
                  level === "Орташа" ? styles.reg_tabs_item_active : {},
                ]}
              >
                <Text style={{ color: "#fff" }}>Орташа</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTempMessage("Жақсы")}
                style={[
                  styles.reg_tabs_item,
                  { backgroundColor: "rgba(119, 31, 152, 1)" },
                  level === "Жақсы" ? styles.reg_tabs_item_active : {},
                ]}
              >
                <Text style={{ color: "#fff" }}>Жақсы</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              {
                width: "25%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
              },
            ]}
            onPress={handleClick}
          >
            <Text style={styles.button__text}>
              <Icon name="send" size={30} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
}