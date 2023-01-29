import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
      backgroundColor: '#F8EDE3',
      minHeight: '100%'
    },
    button: {
      backgroundColor: '#85586F',
      padding: 10,
      borderRadius: 10,
      fontSize: 16,
      width: '100%',
      maxWidth: 100,
      color: '#F8EDE3',
    },
    button__text: {
      fontSize: 16,
      color: '#F8EDE3',
      textAlign: 'center',
    },
    header: {
      backgroundColor: '#D0B8A8',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },
    header__link: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 5,
      width: '33%',
      borderColor: 'black',
      borderRightWidth: 1,
      borderLeftWidth: 1,
    },
    header__link__last_child: {
      display: 'block',
      padding: 10,
    },
    header__text: {
      fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8EDE3',
      },
      flex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      },
      element: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
      },
      text__input: {
        borderColor: 'black',
        borderWidth: '3px',
        marginLeft: 10,
        paddingBottom: 2,
        width: 150,
        display: 'block',
        fontSize: 16,
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
        fontSize: 18,
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
        borderColor: 'black',
        borderWidth: 3,
        width: '90%',
        height: '80%',
        padding: 20
      },
      top__side: {
        width: '100%',
        paddingBottom: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 3
      },
      bottom__side: {
        marginTop: 'auto',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        borderTopColor: 'black',
        borderTopWidth: 3,
        width: '100%'
      },
      message__input: {
        width: '70%',
        fontSize: 16,
      },
      message: {
        display: 'flex',
        overflow: 'scroll',
        height: '100%'
      },
      member__message: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 10,
      },
      bot__message: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10,
      },
      message__cloud: {
        backgroundColor: '#DFD3C3',
        padding: 10,
        borderRadius: 10,
        flexShrink: 1
      },
      message__cloud__bot: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        flexShrink: 1
      },
      bot__name: {

      },
      image__holder: {
        width: 200,
        height: 200,
        marginBottom: 5,
      },
      wrapper: {
        width: '100%',
        height: 500,
      },
      slide: {
        width: '100%',
        height: 500,
      },
      slide__image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
      
});