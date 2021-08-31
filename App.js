import React, { useState } from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import Home from "./screens/home";

const getFonts = () => {
  return Font.loadAsync({
    "noto-serif-regular": require("./assets/fonts/NotoSerif-Regular.ttf"),
    "noto-serif-bold": require("./assets/fonts/NotoSerif-Bold.ttf"),
    "noto-serif-italic": require("./assets/fonts/NotoSerif-Italic.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -32 : 0}
        style={{ flex: 1 }}
      >
        <Home />
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}
