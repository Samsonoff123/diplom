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
    backgroundColor: 'rgba(119, 31, 152, 0.63)',
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
  }
});