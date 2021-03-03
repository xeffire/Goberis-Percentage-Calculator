import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import MyText from "./MyText.js";

export default function App() {
  const [perc, setperc] = useState(0);
  const [val, setval] = useState(0);
  const [preValidVal, setPreValidVal] = useState();
  let validate = (preValidVal) => {setval(preValidVal)};
  return (
    <View style={styles.container}>
      <MyText style={{ textAlign: "center", height: 35 }}>
        Percentage Calculator
      </MyText>
      <Ionicons
        style={{ alignSelf: "center", flex: 1 }}
        name="cash-outline"
        size={100}
        color="#7c8500"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "#7c8500",
          borderWidth: 1,
          marginVertical: 20,
          fontSize: 25,
          color: '#212121',
          textAlign: 'center'
        }}
        keyboardType={'number-pad'}
        placeholder={val.toString()}
        placeholderTextColor={'#212121'}
        selectTextOnFocus={true}
        onChangeText={(value) => setPreValidVal(value)}
        onEndEditing={() => validate(preValidVal)}
      />
      <View style={styles.output}>
        <MyText>{perc}%</MyText>
        <View style={{ width: "80%" }}>
          <Slider
            style={{ flex: 1 }}
            value={perc}
            step={1}
            onValueChange={(value) => setperc(value)}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#e4e65e"
            maximumTrackTintColor="#7c8500"
          />
        </View>
      </View>
      <View style={styles.output}>
        <MyText>{'Tip'}</MyText>
        <View style={styles.textOutput}>
          <View style={{ alignSelf: "center" }}>
            <MyText>{val * perc / 100}{' €'}</MyText>
          </View>
        </View>
      </View>
      <View style={styles.output}>
        <MyText>{'Total'}</MyText>
        <View style={styles.textOutput}>
          <View style={{ alignSelf: "center" }}>
            <MyText>{val * perc / 100 + parseInt(val)}{' €'}</MyText>
          </View>
        </View>
      </View>
      <View style={styles.result}>
        <MyText style={{flex: 1, alignSelf: 'flex-start', textAlignVertical: 'center'}}>{'Price of service: '}{val}{' €'}</MyText>
        <MyText style={{flex: 1, alignSelf: 'flex-start', textAlignVertical: 'center'}}>{'Tip for service: '}{val * perc / 100}{' €'}</MyText>
        <MyText style={{flex: 1, alignSelf: 'flex-start', textAlignVertical: 'center'}}>{'Total amount to pay: '}{val * perc / 100 + parseInt(val)}{' €'}</MyText>
      </View>
      <MyText style={{ textAlign: "center", flex: 1 }}>Justinas Goberis</MyText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#afb42b",
    fontSize: 20,
    paddingTop: 50,
    paddingStart: 25,
    paddingEnd: 25,
  },
  output: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  textOutput: {
    backgroundColor: "#e4e65e",
    width: "80%",
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 15
  },
  result: {
    marginVertical: 15,
    flex: 2,
    paddingStart: 15,
    alignItems: 'flex-start',
    backgroundColor: '#e4e65e',
  }
});
