import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine this is a really cool question</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity>
          <Text>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity>
          <Text>Previous Question</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
