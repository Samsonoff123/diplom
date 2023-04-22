import {
  StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F8EDE3',
    minHeight: '100%'
  },
  button__group: {
    width: '100%',
  },
  button: {
    backgroundColor: '#771F98',
    padding: 10,
    borderRadius: 15,
    width: '100%',
  },
  button__text: {
    fontSize: 16,
    color: '#F8EDE3',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: '#F3F3F3',
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    shadowOffset: {width: -2, height: -4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
    zIndex: 10,
  },
  header__link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    width: '33%',
  },
  header__link__last_child: {
    display: 'block',
    padding: 10,
  },
  header__text: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: '100%',
  },
  element: {
    display: 'flex',
    marginBottom: 10,
    width: '100%',
  },
  label: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
  },
  text__input: {
    borderColor: '#6B6B6B',
    borderWidth: '2px',
    borderRadius: 20,
    paddingBottom: 2,
    paddingLeft: 10,
    width: 150,
    display: 'block',
    fontSize: 16,
    width: '100%',
    height: 55,
  },
  _red: {
    borderColor: 'red',
  },
  text: {
    fontSize: 16,
  },
  text__profile: {
    fontSize: 16,
    marginBottom: 5,
  },
  text__b: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text__bold: {
    fontSize: 18,
    fontWeight: 'bold',
    display: 'block',
    marginBottom: 15,
  },
  _link: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#85586F',
    textDecorationLine: 'underline',
  },
  link__button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10
  },
  link__button__text: {
    color: '#fff',
  },
  reg__main: {
    width: '100%',
    zIndex: 1,
  },
  top__side: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 70,
    paddingBottom: 50,
    backgroundColor: 'white',
    borderRadius: '18px',
    paddingLeft: 30,
    paddingRight: 30,
    zIndex: 2,
  },
  shadowProp: {
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  top__side__text: {
    display: 'block',
    textAlign: 'center',
    with: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
  },
  bottom__side: {
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    width: '100%',
    height: 200,
    padding: 20,
  },
  message__input: {
    padding: 30,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    height: '65%',
    fontSize: 16,
  },
  message: {
    display: 'flex',
    overflow: 'scroll',
    height: '100%'
  },
  member__message: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  bot__message: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  message__cloud: {
    backgroundColor: '#771F98',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    flexShrink: 1
  },
  message__text: {
    color: 'white'
  },
  message__cloud__bot: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#771F98',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 15,
    flexShrink: 1
  },
  gray: {
    width: 58,
    height: 21,
    backgroundColor: '#F1F1F1',        
    borderRadius: 7,
    marginTop: 5,
  },
  image__holder: {
    width: 200,
    height: 200,
    marginBottom: 5,
  },
  swiper: {
    height: 300,
    overflow: 'hidden',
    transform: [{
      scale: 1.2
    }]
  },
  slide__image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  startPage: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 54,
    color: '#000000',
  },
  span: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22,
    color: '#000000',
  },
  login_text__bold: {
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 36,
    color: '#000000',
    textAlign: "left"
  },
  login__image: {
    transform: [{
      translateX: 20
    }]
  },
  fogot__pass: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 20,
    color: '#993F3F',
    display: 'block',
    maxWidth: 100,
    marginBottom: 20,
  },
  line: {
    height: 1,
    width: 90,
    backgroundColor: '#949494',
  },
  svg__left: {
    zIndex: 2,
    transform: [{
      translateX: 40
    }]
  },
  svg__right: {
    zIndex: 2,
    transform: [{
      translateX: -40
    }]
  },
  products: {
    padding: 20,
    width: '100%',
    backgroundColor: 'rgba(119, 31, 152, 0.3)',
    display: 'flex',
    justifyContent: 'center'
  },
  products__element:{
    display: 'block',
    width: '100%',
    textDecoration: 'none'
  },
  products__text: {
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 38,
    marginTop: 20,
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center'
  },
  products__text__purple: {
    opacity: 0.5,
  },
  games__page: {

  },
  games__header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 10,
    paddingTop: 30,
    backgroundColor: 'rgba(119, 31, 152, 0.3)'
  },
  games__body: {
    padding: 20,
    overflow: 'scroll',
    height: '100%',
    backgroundColor: 'rgba(119, 31, 152, 0.1)'
  },
  games__message__input: {
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  games__text: {
    display: 'block',
    borderRadius: 20,
    borderColor: 'transparent',
    borderWidth: 3,
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 38,
    marginTop: 20,
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center'
  },
  games__text__active: {
    borderColor: 'white',
    borderWidth: 3
  },
  carousel: {
    borderRadius: 25,
    height: 200,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative'
  },
  carousel__text_answer: {
    fontSize: 35,
    padding: 20,
    color: '#fff'
  },
  carousel__text: {
    fontSize: 21,
    padding: 20,
    color: '#fff'
  },
  carousel__image: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 130,
    zIndex: -1,
    resizeMode: 'contain'
  },
  products__icon: {
    width: 50,
    height: 50,
    margin: 0,
  },
  products__icon__text: {
    fontSize: 25,
    lineHeight: 38,
    color: '#000000',
    textAlign: 'center'
  },
  products__bottom_img: {
    backgroundColor: 'rgba(119, 31, 152, 0.3)',
    width: '100%',
    height: 200,
    transform: [{translateY: -15}],
    marginBottom: -15
  },
  tests: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: 'rgba(119, 31, 152, 0.3)',
  },
  progress: {
    height: 10,
    borderRadius: 30,
    backgroundColor: 'rgb(232, 232, 232)',
    marginBottom: 10
  },
  progress__inner: {
    height: '100%',
    borderRadius: 30,
    width: '80%',
    backgroundColor: 'rgb(18, 231, 48)',
  },
  result: {
    textAlign: 'center',
    padding: 20,
    width: '100%',
  },
  test_main: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
  },
  test_title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  test_answer_main: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20
  },
  test_answer: {
    fontSize: 22,
    color: 'black'
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    zIndex: -1,
  },
  test_element_main: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 20,
    height: 550
  },
  tests_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  questions__image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: -25,
    zIndex: -1
  },
  result__text: {
    color: '#fff',
    fontSize: 20
  },
  question__button: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    padding: 5,
    borderRadius: 10
  },
  products__button: {
    padding: 5,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'rgba(119, 31, 152, 0.1)'
  },
  products__icon_main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});