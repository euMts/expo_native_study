import React from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  centerContainer: {
    height: 400,
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    flex: 1,
    height: 200,
  },
  buttonContainer: {
    flex: 1,
    height: 200,
    justifyContent: "space-evenly",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 26,
    lineHeight: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default function Home({ navigation }) {
  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        <View style={styles.centerContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/png/app_logo.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              title="Go api info page"
              onPress={() => navigation.navigate("Api Info")}
            >
              <Text style={styles.text}>Iniciar</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              title="Open ranking"
              onPress={() => console.log("ranking pressionado")}
            >
              <Text style={styles.text}>Ranking</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
