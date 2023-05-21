import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { styles as stylesS} from "../../global.style";
import { useNavigate } from "react-router-native";
import { useState } from "react";
import { Icon } from "@react-native-material/core";

export const data = [
  {
    image: "https://m.media-amazon.com/images/I/81R9gU35apL._AC_UF1000,1000_QL80_.jpg",
    title: "Beginner English Course",
    description: "Learn the basics of English grammar and vocabulary with our Beginner English Course. Perfect for those who are just starting to learn English!",
    price: 99.99,
  },
  {
    image: "https://www.centrmag.ru/catalog/18_09_19_11.jpg",
    title: "Intermediate English Course",
    description: "Take your English skills to the next level with our Intermediate English Course. Learn more complex grammar and vocabulary to communicate effectively in English.",
    price: 149.99,
  },
  {
    image: "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2018/08/english-course-book.png",
    title: "Advanced English Course",
    description: "Challenge yourself and master the English language with our Advanced English Course. Perfect for those who already have a strong foundation in English and want to become fluent.",
    price: 199.99,
  },
  {
    image: "https://img4.labirint.ru/rc/0659e8e1fc0c0296aa34756baffd7163/363x561q80/books7/68062/cover.jpg?1280394613",
    title: "Business English Course",
    description: "A specialized course for professionals who need to communicate in English in a business environment. You will learn vocabulary and expressions commonly used in the workplace, as well as business communication etiquette.",
    price: 249,
  },
  {
    image: "https://poliglot.com.ua/image/cache/catalog/oxford/14652984_48340-500x500.jpg",
    title: "IELTS Preparation Course",
    description: "If you need to take the IELTS exam for academic or immigration purposes, this course will prepare you for it. You will learn the format of the exam, as well as test-taking strategies and practice exercises.",
    price: 299,
  },
  {
    image: "https://oxford-book.com.ua/86791-large_default/kniga-heinemann-elt-toefl-preparation-course-with-key.jpg",
    title: "TOEFL Preparation Course",
    description: "This course is designed to help you prepare for the TOEFL exam, which is commonly used for university admissions in English-speaking countries. You will learn the format of the exam and practice test-taking strategies.",
    price: 299,
  },
  {
    image: "https://img3.labirint.ru/rc/4f49e7e2b9183d2e402465c074dcfa1a/363x561q80/books1/1737/cover.jpg?1422365361",
    title: "English for Travel",
    description: "If you're planning to travel to an English-speaking country, this course will teach you the basics of the language that you'll need to get around and communicate with locals.",
    price: 99,
  },
  {
    image: "https://basket-04.wb.ru/vol530/part53004/53004588/images/big/1.jpg",
    title: "English for Kids",
    description: "Designed for children aged 6-12, this course teaches the basics of the English language through fun activities and games. Kids will learn vocabulary, grammar, and simple conversations.",
    price: 49,
  },
]

const channels = [
  {
    img: require('../assets/channel1.png'),
    link: 'https://www.youtube.com/@CakeEnglish/featured',
    name: 'Cake English'
  },
  {
    img: require('../assets/channel2.png'),
    link: 'https://www.youtube.com/@LinguaTripTV',
    name: 'LinguaTrip TV'
  },
  {
    img: require('../assets/channel3.png'),
    link: 'https://www.youtube.com/@skyengschool',
    name: 'Skyeng: онлайн-школа английского языка '
  },
  {
    img: require('../assets/channel4.png'),
    link: 'https://www.youtube.com/@linguamarina',
    name: 'linguamarina'
  },
  {
    img: require('../assets/channel5.png'),
    link: 'https://www.youtube.com/@TED',
    name: 'TED'
  },
  {
    img: require('../assets/channel6.png'),
    link: 'https://www.youtube.com/@KirillsEnglish',
    name: 'KIRILL`S ENGLISH'
  },
  {
    img: require('../assets/channel7.png'),
    link: 'https://www.youtube.com/@EnglishwithLucy',
    name: 'English with Lucy'
  },
]

const apps = [
  {
    name: 'Cake - Learn English & Korean',
    img: require('../assets/app1.png'),
    appstore: 'https://apps.apple.com/kz/app/cake-learn-english-korean/id1350420987',
    googleplay: 'https://play.google.com/store/apps/details?id=me.mycake&hl=en_US',
  },
  {
    name: 'Tandem: Language exchange',
    img: require('../assets/app2.png'),
    appstore: 'https://apps.apple.com/kz/app/tandem-conversation-exchange/id959001619',
    googleplay: 'https://play.google.com/store/apps/details?id=net.tandem&hl=en_US',
  },
  {
    name: 'English with Lingualeo',
    img: require('../assets/app3.png'),
    appstore: 'https://apps.apple.com/kz/app/learn-english-with-lingualeo/id480952151',
    googleplay: 'https://play.google.com/store/apps/details?id=com.lingualeo.android&hl=en_US',
  },
  {
    name: 'Quizlet: Languages & Vocab',
    img: require('../assets/app4.png'),
    appstore: 'https://apps.apple.com/kz/app/quizlet-flashcards-homework/id546473125',
    googleplay: 'https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid&hl=en_US',
  },
]

const ProductList = () => {
  const [tab, setTab] = useState("Books")

  return (
    <>
      <View style={stylesS.games__header}>
        <TouchableOpacity
          style={[
            stylesS.games__text,
            tab === "Books" && stylesS.games__text__active,
            {paddingRight: 10, paddingLeft: 10}
          ]}
          onPress={() => setTab("Books")}
        >
          <Icon name="book-open" size={50} color="#fff" />
          <Text style={stylesS.games__text__text}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesS.games__text,
            tab === "Channels" && stylesS.games__text__active,
            {paddingRight: 10, paddingLeft: 10}
          ]}
          onPress={() => setTab("Channels")}
        >
          <Icon name="youtube" size={50} color="#fff" />
          <Text style={stylesS.games__text__text}>Channels</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            stylesS.games__text,
            tab === "Apps" && stylesS.games__text__active,
            {paddingRight: 10, paddingLeft: 10}
          ]}
          onPress={() => setTab("Apps")}
        >
          <Icon name="apps" size={50} color="#fff" />
          <Text style={stylesS.games__text__text}>Apps</Text>
        </TouchableOpacity>
      </View>

     {
      tab === "Books" && (
      <View style={{paddingTop: 10, backgroundColor: "#F8F8F8"}}>
        {data.map((d, index) => (
          <ProductItem
            key={index}
            image={d.image}
            title={d.title}
            description={d.description}
            price={d.price}
            index={index}
          />
        ))}
      </View>
      )
     }
     {
      tab === "Channels" && (
        <View>
          {
            channels.map(channel => 
              <View style={{width: '100%', padding: 20}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>{channel.name}</Text>
                <Image style={{width: '100%', height: 100, marginTop: 10, resizeMode: 'contain'}} source={channel.img}/>
                <TouchableOpacity
                    style={[stylesS.button, {width: 120, padding: 5, marginTop: 10, alignSelf: 'flex-end'}]}
                    onPress={()=>Linking.openURL(channel.link)}
                >
                    <Text style={[stylesS.button__text, {fontSize: 16}]}>Толығырақ...</Text>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      )
     }
     {
      tab === 'Apps' && (
        <View>
            {
              apps.map(app => 
                <View style={{width: '100%', padding: 20}}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>{app.name}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Image style={{width: 150, height: 150, marginTop: 10, resizeMode: 'contain'}} source={app.img}/>
                    <View>
                      <TouchableOpacity
                        style={[stylesS.button, {width: 120, padding: 5, marginTop: 10, alignSelf: 'flex-end', alignItems: 'center'}]}
                        onPress={()=>Linking.openURL(app.appstore)}
                      >
                        <Icon name="apple-ios" size={50} color="#fff" />
                          <Text style={[stylesS.button__text, {fontSize: 16}]}>Толығырақ...</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[stylesS.button, {width: 120, padding: 5, marginTop: 10, alignSelf: 'flex-end', alignItems: 'center'}]}
                        onPress={()=>Linking.openURL(app.googleplay)}
                      >
                        <Icon name="android" size={50} color="#fff" />
                          <Text style={[stylesS.button__text, {fontSize: 16}]}>Толығырақ...</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>  
              )
            }
        </View>
      )
     }
    </>
  )
};

const ProductItem = ({ image, title, description, price, index }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity
          style={[stylesS.button, {width: 120, padding: 5}]}
          onPress={()=>navigate(`/products/${index}`)}
      >
          <Text style={[stylesS.button__text, {fontSize: 16}]}>Толығырақ...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F8F8F8",
  },
  image: {
    width: 80,
    height: '100%',
    resizeMode: "contain",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#771F98",
  },
  description: {
    fontSize: 14,
    color: "#771F98",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#771F98",
    marginTop: 5,
  },
});

export default ProductList;
