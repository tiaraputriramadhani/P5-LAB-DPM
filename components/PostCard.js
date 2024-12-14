import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function PostCard({
  username,
  userHandle,
  caption,
  imageSource,
  profileImage,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.handle}>{userHandle}</Text>
        </View>
      </View>

      <Text style={styles.caption}>{caption}</Text>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.info}>7:12 am · 13 Dec 24 · 203K Views</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  handle: {
    color: "gray",
  },
  caption: {
    marginBottom: 10,
    fontSize: 14,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  info: {
    color: "gray",
    marginTop: 10,
    fontSize: 12,
  },
});
