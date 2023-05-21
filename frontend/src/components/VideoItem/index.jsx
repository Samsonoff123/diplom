import React from 'react'
import WebView from "react-native-webview";
import { styles } from "../../../global.style"
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";import { useState } from 'react';
;

export default function VideoItem({content}) {
    const [answer, setAnswer] = useState('')
    const [repeat, setRepeat] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)

    const handleClick = (correctAnswer) => {
        if (answer == correctAnswer) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
            
        }
        setRepeat(true)
      };

      const handleRepeat = () => {
        setRepeat(false)
      }

  return (
    <View style={[styles.games__body__content_element, {marginBottom: 20}]}>
    {
        repeat ?
        isCorrect ? 
        <View style={styles.video__answer}>
            <Text style={styles.video__answer_text}>Вы ответили правильно!</Text>
            <Text style={styles.video__answer_text_count}>Ваш ответ: {content.answer}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleRepeat}
            >
                <Text style={styles.button__text}>Қайтадан</Text>
            </TouchableOpacity>
        </View>
        :
        <View style={styles.video__answer}>
            <Text style={styles.video__answer_text}>Вы ошиблись!</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={handleRepeat}
            >
                <Text style={styles.button__text}>Қайтадан</Text>
            </TouchableOpacity>
        </View>
        : <>
    <WebView
      source={{ url: content.video }}
      style={{ height: 200, borderRadius: 25 }}
    />
    <View style={styles.games__bottom}>
      <TextInput
        name={"input"}
        placeholder="Type here..."
        multiline={true}
        onChange={(e) => setAnswer(e.nativeEvent.text)}
        style={[
          styles.games__message__input,
          { borderBottomRightRadius: 0 },
        ]}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            marginLeft: "auto",
            width: 100,
            borderRadius: 0,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 10,
          },
        ]}
        onPress={()=>handleClick(content.answer)}
      >
        <Text style={styles.button__text}>Жіберу</Text>
      </TouchableOpacity>
    </View>
        </>
    }

  </View>
  )
}
