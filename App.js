import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Home from "./src/screens/home";
import Quiz from "./src/screens/quiz";
import Results from "./src/screens/results";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <Results />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
