import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { globalFont } from "../styles/globalFonts";

const home = () => {
  return (
    <SafeAreaView>
      <Text style={globalFont.bold}>Home Screen</Text>
    </SafeAreaView>
  );
};

export default home;
