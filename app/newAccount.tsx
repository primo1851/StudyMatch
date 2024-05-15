import React from "react";
import { View, Text } from "react-native";
import { Button } from '@rneui/themed';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routerTypes";


type NewAccountScreenProps = NativeStackScreenProps<RootStackParamList, "NewAccount">;
const NewAccountScreen: React.FC<NewAccountScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings Screen</Text>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default NewAccountScreen;