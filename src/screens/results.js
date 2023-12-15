import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Results = () => {
  return (
    <View>
      <View>
        <Text>Results</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.2.2059607833.1702626320&semt=sph",
          }}
          style={styles.banner}
          resizeMode="cover"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>
            
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Results;

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
