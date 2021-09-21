import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import { store } from "./store/reducers/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Home />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
