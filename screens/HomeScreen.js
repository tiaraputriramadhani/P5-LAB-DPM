import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import PostCard from "../components/PostCard";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <PostCard
          username="asha"
          userHandle="@jennrocx"
          caption="ha ha ha."
          imageSource={require("../assets/me.jpeg")}
          profileImage={require("../assets/dino.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
