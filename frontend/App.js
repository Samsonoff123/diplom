import { View } from 'react-native';
import { Provider } from 'react-redux';
import { styles } from './global.style';
import Index from './src/pages';
import store from './src/redux/store'

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.body}>
        <Index />
      </View>
    </Provider>
  );
}