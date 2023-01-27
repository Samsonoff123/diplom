import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from '../../global.style'
import { Link } from 'react-router-native';
import { useEffect, useState } from 'react';

export default function Registration() {
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
    const [finish, setFinish] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFirstMessage('Здравствуйте, напишите свое ФИО')
        }, 1000)

    }, [])

  const handleClick = () => {
    if (tempMessage !== '') {
        if (i === 1) {
            setName(tempMessage)
            setTimeout(() => {
                setSecondMessage(`Приятно познакомиться, ${tempMessage}, напишите дату своего рождения(пример: 13.04.2001)`)
            }, 500);
        } else if (i === 2) {
            setAge(tempMessage)
            setTimeout(() => {
                setThirdMessage('Напишите email к которому будет привязана ваша учетная запись')
            }, 500);
        } else if (i === 3) {
            setEmail(tempMessage)
            setTimeout(() => {
                setFourthMessage('Придумайте пароль')
            }, 500);
        } else if (i === 4) {
            setPassword(tempMessage)
            setTimeout(() => {
                setFinish('Подождите пока мы зарегестрируем вас')
            }, 500);
        }
        setTempMessage('')
        setI(i + 1)
    }
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text__bold}><Link to="/"><Text style={styles._link}>Войдите</Text></Link> / Зарегестрируйтесь</Text>
        <View style={styles.reg__main}>
            <View style={styles.top__side}>
                <Text style={styles.bot__name}>{botName}</Text>
            </View>
            <ScrollView style={styles.message}>
            {
                    firstMessage ? 
                    <View style={styles.bot__message}>
                        <Text>{botName}: </Text>
                        <View style={styles.message__cloud__bot}>
                            <Text>{firstMessage}</Text>
                        </View>
                    </View> : null
                }
                {
                    name ? 
                    <View style={styles.member__message}>
                        <View style={styles.message__cloud}>
                            <Text>{name}</Text>
                        </View>
                        <Text> :Вы</Text>
                    </View> : null
                }
                {
                    secondMessage ? 
                    <View style={styles.bot__message}>
                        <Text>{botName}: </Text>
                        <View style={styles.message__cloud__bot}>
                            <Text>{secondMessage}</Text>
                        </View>
                    </View> : null
                }
                {
                    age ? 
                    <View style={styles.member__message}>
                        <View style={styles.message__cloud}>
                            <Text>{age}</Text>
                        </View>
                        <Text> :Вы</Text>
                    </View> : null
                }
                {
                    thirdMessage ? 
                    <View style={styles.bot__message}>
                        <Text>{botName}: </Text>
                        <View style={styles.message__cloud__bot}>
                            <Text>{thirdMessage}</Text>
                        </View>
                    </View> : null
                }
                {
                    email ? 
                    <View style={styles.member__message}>
                        <View style={styles.message__cloud}>
                            <Text>{email.includes('@') ? email : email + '@mail.ru'}</Text>
                        </View>
                        <Text> :Вы</Text>
                    </View> : null
                }
                {
                    fourthMessage ? 
                    <View style={styles.bot__message}>
                        <Text>{botName}: </Text>
                        <View style={styles.message__cloud__bot}>
                            <Text>{fourthMessage}</Text>
                        </View>
                    </View> : null
                }
                {
                    password ? 
                    <View style={styles.member__message}>
                        <View style={styles.message__cloud}>
                            <Text>{password}</Text>
                        </View>
                        <Text> :Вы</Text>
                    </View> : null
                }
                {
                    finish ? 
                    <View style={styles.bot__message}>
                        <Text>{botName}: </Text>
                        <View style={styles.message__cloud__bot}>
                            <Text>{finish}</Text>
                        </View>
                    </View> : null
                }

            </ScrollView>
            <View style={styles.bottom__side}>
                <TextInput value={tempMessage} onChange={e => setTempMessage(e.nativeEvent.text)} placeholder="Ваше сообщение" style={styles.message__input} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleClick}
                >
                    <Text style={styles.button__text}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    
    </View>
  )
}