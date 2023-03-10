import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { DeviceMotion } from "expo-sensors";

const styles = StyleSheet.create({
  mainLiquid: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    width: 300,
    height: 500,
  },
});

export default function LiquidAnimation() {
  const [teste, setTeste] = useState();
  useEffect(() => {
    const data = DeviceMotion.addListener(setTeste);
    return () => data.remove();
  }, {});
  console.log("");
  if (teste) {
    console.log(teste.rotation.alpha);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.mainLiquid}>
        <Text>Liquid Animation</Text>
      </View>
    </View>
  );
}
