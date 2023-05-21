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
import VideoItem from "../components/VideoItem";
import { audioContent } from "../components/audoItems";


const INJECTEDJAVASCRIPT = `document.getElementsByTagName("video")[0].removeAttribute("autoplay"); const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`


export default function Games() {
  const [message, setMessage] = useState("");
  const [tab, setTab] = useState("Cards")
  const userItem = useSelector(store => store.users.items)

  const content = {
    video: {
      name: "video",
      content: [
        {
          video: "https://www.youtube.com/embed/n5EpfSwI1GQ?clip=UgkxunE2GyTYuNAv9vTB-DBNn8FVxC9XQvQr&amp;clipt=EMXYARifhwI",
          answer: "You remember the Ludwins. The big one had a thing for you, didn't she?"
        },
        {
          video: "https://www.youtube.com/embed/n5EpfSwI1GQ?clip=Ugkxhnye5G2iC3ks7OxoIKO0-38emfxO8nZc&amp;clipt=ENDvAxjkmwQ",
          answer: "Yeah, I always had a thing for musicians"
        },
        {
          video: "https://www.youtube.com/embed/n5EpfSwI1GQ?clip=UgkxLCxPdAMRAEbrWJHC-48SHnca_ULXzxQ4&amp;clipt=EKnFBxjV-wc",
          answer: "Well, good, because I've always had a thing for pretty girls"
        },
        {
          video: "https://www.youtube.com/embed/n5EpfSwI1GQ?clip=UgkxLsFkZQA11E3ZK87KzEK_d2iIWdELjXw4&amp;clipt=EP3CDhiC-w4",
          answer: "Moments where that task is so unbelievably challenging that you feel retarted, disabled is some way"
        },
        {
          video: "https://www.youtube.com/embed/n5EpfSwI1GQ?clip=UgkxSg0arWkBkber6SW07engEKYFHmugy4pN&amp;clipt=EKuqFRiM0xU",
          answer: "You're really, really smart but also selfish, crass"
        },
        {
          video: "https://www.youtube.com/embed/tdVMmsWijWU?clip=UgkxDHLoXWVC3gyLOgSo-SXUy-fjE_RSk0eT&amp;clipt=EP_9BRjZrAY",
          answer: "Dear Paul, I've finally devided to take the plunge and go for that job in Tokyo"
        }
      ],
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
            <Text style={[styles.text, {marginBottom: 20, fontWeight: 'bold'}]}>
              Бейнероликтерге субтитр жасаңыз
            </Text>
            {content.video.content.map((content, index) => (
              <VideoItem content={content} key={index} />
            ))}
          </View>
        </View>
      )}
      {tab === "Audio" && (
        <View style={styles.games__body}>
          <View style={[styles.games__body__content_list]}>
            {audioContent.map((content, index) => (
              <View key={index} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: 20, marginBottom: 20, borderBottomColor: 'rgba(119, 31, 152)', borderBottomWidth: 2}}>
                 {!!(index % 2) ? <View style={{alignItems: 'flex-start', marginTop: 'auto'}}>
                  <Text style={styles.text__bold}>№{index + 1}</Text>
                  <Text style={styles.text__bold}>Қосымша</Text>
                </View>
                : null}
              <View key={index} style={[styles.games__body__content_element, {width: '70%'}, !(index % 2) ? { marginRight: 'auto' } : { marginLeft: 'auto' }]}>
                <Text style={styles.text__bold}>"{content.name.split(' ')[3]}" сөзінің айтылуы</Text>
                <View style={[{height: 150, overflow: 'hidden', borderRadius: 25}, !(index % 2) ? { borderBottomLeftRadius: 0, borderTopLeftRadius: 0} : { borderBottomRightRadius: 0, borderTopRightRadius: 0 }]}>
                  <YoutubePlayer videoId={content.url} height= {170} />
                </View>
              </View>
                {!(index % 2) ? <View style={{alignItems: 'flex-end', marginTop: 'auto'}}>
                  <Text style={styles.text__bold}>№{index + 1}</Text>
                  <Text style={styles.text__bold}>Қосымша</Text>
                </View>
                : null  
              }
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