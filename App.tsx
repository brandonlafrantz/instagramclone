import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

const App = () => {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
      >
        <HomeScreen />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
