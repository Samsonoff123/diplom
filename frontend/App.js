import { View } from "react-native";
import { Provider } from "react-redux";
import { styles } from "./global.style";
import Index from "./src/pages";
import store from "./src/redux/store";
import { IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (
    <Provider store={store}>
      <IconComponentProvider IconComponent={MaterialCommunityIcons}>
        <View style={styles.body}>
          <Index />
        </View>
      </IconComponentProvider>
    </Provider>
  );
}
