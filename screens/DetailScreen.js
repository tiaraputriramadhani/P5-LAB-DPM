import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/dino.png")}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.username}>asha</Text>
          <Text style={styles.handle}>@jennrocx</Text>
        </View>
      </View>

      <Text style={styles.caption}> ha ha ha.</Text>
      <Image source={require("../assets/me.jpeg")} style={styles.postImage} />

      <Text style={styles.info}>7:12 am · 13 Dec 24 · 203K Views</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 18,
  },
  handle: {
    color: "gray",
  },
  caption: {
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  info: {
    color: "gray",
    marginTop: 10,
    fontSize: 12,
  },
});
