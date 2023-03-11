import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { DeviceMotion } from "expo-sensors";

const styles = (liquidDegree = "0deg") =>
  StyleSheet.create({
    mainLiquid: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "green",
      // marginTop: 2000,
      width: 300,
      height: 300,
      transform: [{ rotate: liquidDegree }],
    },
  });

export default function LiquidAnimation() {
  const [rotationData, setRotationData] = useState();
  const [degreeData, setDegreeData] = useState("0deg");
  const [alpha, setAlpha] = useState();
  const [beta, setBeta] = useState();
  const [gamma, setGamma] = useState();

  // DeviceMotion.setUpdateInterval(100);
  useEffect(() => {
    const data = DeviceMotion.addListener(handleRotationChange);
    setRotationData(data);
  }, []);

  const handleRotationChange = (data) => {
    setAlpha(data.rotation.alpha)
    setBeta(data.rotation.beta)
    setGamma(data.rotation.gamma)
    console.log(data.rotation)
    setDegreeData(`${String((data.rotation.alpha) * 20)}deg`);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles(degreeData).mainLiquid}>
        <Text>If yoube the cash</Text>
        <Text style={{fontSize: 20}}>alpha: {alpha}</Text>
        <Text style={{fontSize: 20}}>beta: {beta}</Text>
        <Text style={{fontSize: 20}}>gamma: {gamma}</Text>
      </View>
    </View>
  );
}
