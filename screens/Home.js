import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

export default function Home() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Image
          style={{
            height: 100,
            width: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
