import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import Title from "../components/title";

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.2.2059607833.1702626320&semt=sph",
          }}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 200,
    width: 200,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
