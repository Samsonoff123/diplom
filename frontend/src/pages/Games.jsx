import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../global.style";
import YoutubePlayer from "react-native-youtube-iframe";
import { useState } from "react";
import { useEffect } from "react";
import WebView from "react-native-webview";
import Carousel from 'react-native-snap-carousel';
import axios from "axios";
import { useSelector } from "react-redux";
import { Icon } from "@react-native-material/core";


const INJECTEDJAVASCRIPT = `document.getElementsByTagName("video")[0].removeAttribute("autoplay"); const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`

export default function Games() {
  const [message, setMessage] = useState("");
  const [tab, setTab] = useState("Cards")
  const userItem = useSelector(store => store.users.items)

  const content = {
    video: {
      name: "video",
      content: ["uYoEv_lI6Xw", "qRQoJv4hpEE", "c9xMC7lx7sY", "GU176OCPQWk", "8-s0MAU5HHU", "X1N_A2vO7Js"],
    },
    audio: {
      name: "audio",
      content: ["http://klassikaknigi.info/novoe2/audiouroki/kz/eng/2.mp3", "http://klassikaknigi.info/novoe2/audiouroki/kz/eng/3.mp3", "http://klassikaknigi.info/novoe2/audiouroki/kz/eng/4.mp3","http://klassikaknigi.info/novoe2/audiouroki/kz/eng/1.mp3", "http://klassikaknigi.info/novoe2/audiouroki/kz/eng/5.mp3", "http://klassikaknigi.info/novoe2/audiouroki/kz/eng/6.mp3",],
    },
    cards: {
      name: "cards",
      content: [
        {
          data: [
            {
              text: "Become [bɪˈkʌm]",
              color: "rgb(177, 88, 210)",
              isAnswer: true,
              image: require('../assets/become.png')
            },
            {
              text: "Become - begin to be.   Болу - бола бастау.",
              color: "rgb(104, 133, 203)",
              isAnswer: false,
              image: ''
            },
          ]
        },
        {
          data: [
            {
              text: "Choose [tʃuːz]",
              color: "rgb(110, 219, 201)",
              isAnswer: true,
              image: require('../assets/choice.png')
            },
            {
              text: "Choose - pick out or select. Таңдау - бір/бірнеше затты таңдау",
              color: "rgb(142, 219, 110)",
              isAnswer: false,
              image: ''
            },
          ]
        },
        {
          data: [
            {
              text: "Get [ɡet]",
              color: "rgb(228, 209, 143)",
              isAnswer: true,
              image: require('../assets/get.png')
            },
            {
              text: "Get - come to have or hold. Алу – ие болу немесе ұстау",
              color: "rgb(228, 157, 143)",
              isAnswer: false,
              image: ''
            },
          ]
        },
        {
          data: [
            {
              text: "Study [ˈstʌdi]",
              color: "rgb(177, 88, 210)",
              isAnswer: true,
              image: require('../assets/study.png')
            },
            {
              text: "Study - the devotion of time and attention to acquiring knowledge on an academic subject. Оқу – оқу пәні бойынша білім алуға уақыт пен көңіл бөлу.",
              color: "rgb(104, 133, 203)",
              isAnswer: false,
              image: ''
            },
          ]
        },
        {
          data: [
            {
              text: "Travel [ˈtrævl]",
              color: "rgb(110, 219, 201)",
              isAnswer: true,
              image: require('../assets/travel.png')
            },
            {
              text: "Travel - the action of traveling, typically abroad. Саяхат - әдетте шетелге саяхаттау әрекеті.",
              color: "rgb(142, 219, 110)",
              isAnswer: false,
              image: ''
            },
          ]
        },
        {
          data: [
            {
              text: "bottle [ˈbɒtl]",
              color: "rgb(228, 209, 143)",
              isAnswer: true,
              image: require('../assets/bottle.png')
            },
            {
              text: "Bottle - container for liquids. Бөтелке - сұйықтықтарға арналған ыдыс",
              color: "rgb(228, 157, 143)",
              isAnswer: false,
              image: ''
            },
          ]
        },
      ],
    },
  };

  useEffect(() => {
    if (tab) {
      setMessage("")
    }
  }, [tab])

  const handleClick = () => {
    // axios.post('https://diplom-navy.vercel.app/api/user/sendDescriptions', {
    //   text: message,
    //   userId: userItem.user.id
    // })

    console.log(message);
    setMessage("")
  };
  return (
    <View style={styles.games__page}>
      <View style={styles.games__header}>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "Cards" && styles.games__text__active,
          ]}
          onPress={() => setTab("Cards")}
        >
          <Icon name="cards" size={50} color="#fff" />
          <Text style={styles.games__text__text}>Карталар</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "Video" && styles.games__text__active,
          ]}
          onPress={() => setTab("Video")}
        >
          <Icon name="video" size={50} color="#fff" />
          <Text style={styles.games__text__text}>Видео</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.games__text,
            tab === "Audio" && styles.games__text__active,
          ]}
          onPress={() => setTab("Audio")}
        >
          <Icon name="volume-high" size={50} color="#fff" />
          <Text style={styles.games__text__text}>Аудио</Text>
        </TouchableOpacity>
      </View>
      {tab === "Video" && (
        <View style={styles.games__body}>
          <View style={styles.games__body__content_list}>
            {content.video.content.map((content, index) => (
              <View key={index} style={styles.games__body__content_element}>
                <Text style={styles.text__bold}>
                  №{index + 1} Бейнероликтер
                </Text>
                <Text style={styles.text}>
                  Бейнероликке қысқаша сипаттама беріңіз
                </Text>
                <YoutubePlayer height={230} videoId={content} />
                <View style={styles.games__bottom}>
                  <TextInput
                    name={"input" + index}
                    placeholder="Type here..."
                    multiline={true}
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
                    onPress={handleClick}
                  >
                    <Text style={styles.button__text}>Жіберу</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
      {tab === "Audio" && (
        <View style={styles.games__body}>
          <View style={styles.games__body__content_list}>
            {content.audio.content.map((content, index) => (
              <View key={index} style={styles.games__body__content_element}>
                <Text style={styles.text__bold}>№{index + 1} Аудио</Text>
                <WebView
                  source={{ url: content }}
                  scrollEnabled={false}
                  bounces={false}
                  style={{ height: 60, borderRadius: 25 }}
                  javaScriptEnabled={true}
                  mediaPlaybackRequiresUserAction={true}
                  allowsInlineMediaPlayback={true}
                  injectedJavaScript={INJECTEDJAVASCRIPT}
                />
                <Text></Text>
              </View>
            ))}
          </View>
        </View>
      )}
      {tab === "Cards" && (
        <View style={styles.games__body}>
          <View style={styles.games__body__content_list}>
            {content.cards.content.map((data, index) => (
              <Carousel
                key={index}
                data={data.data}
                loop
                hasParallaxImages
                layout={"stack"}
                sliderWidth={360}
                itemWidth={300}
                renderItem={({ item, index }) => (
                  <View
                    style={[styles.carousel, { backgroundColor: item.color }]}
                  >
                    <Text
                      style={
                        item.isAnswer
                          ? styles.carousel__text_answer
                          : styles.carousel__text
                      }
                    >
                      {item.text}
                    </Text>
                    {item.isAnswer && (
                      <Image
                        style={styles.carousel__image}
                        source={item.image}
                      />
                    )}
                  </View>
                )}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
}