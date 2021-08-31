import React from "react";
import { KeyboardAvoidingView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/home";
export default function App() {
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
