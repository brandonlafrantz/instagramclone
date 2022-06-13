import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import { size, weight } from "./src/theme/fonts";
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          color: colors.primary,
          fontSize: size.xl,
        }}
      >
        Hello World! Yoooooo!
        <AntDesign name="stepforward" size={25} />
      </Text>
    </View>
  );
};

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Yooooo!</Text>
      <StatusBar style="auto" />
    </View>
  );
} */

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
 */

export default App;
