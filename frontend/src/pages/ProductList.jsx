import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { styles as stylesS} from "../../global.style";
import { useNavigate } from "react-router-native";

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

const ProductList = () => {

  return (
    <View style={{paddingTop: 50, backgroundColor: "#F8F8F8"}}>
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
};

const ProductItem = ({ image, title, description, price, index }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={4} ellipsizeMode='tail' style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}$</Text>
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
