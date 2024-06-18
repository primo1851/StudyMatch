import React from "react";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/routerTypes";


type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <View
        style={styles.loginInputContainer}
      >
        <Button size="sm" type="clear" titleStyle={styles.buttonNewAccountText} buttonStyle={styles.noAccount} onPress={() => navigation.push("NewAccount")}>
          Ainda não tem uma conta?
        </Button>
        <Input placeholder='Email' inputContainerStyle={{ borderBottomWidth: 0 }} inputStyle={{ width: "85%" }} leftIcon={{ type: 'font-awesome', name: 'user', color: 'rgba(111, 202, 186, 1)' }} leftIconContainerStyle={{ marginRight: 10 }}  ></Input>
        <Input placeholder='Senha' inputContainerStyle={{ borderBottomWidth: 0, marginTop: -20 }} inputStyle={{ width: "85%" }} leftIcon={{ type: 'font-awesome', name: 'lock', color: 'rgba(111, 202, 186, 1)' }} leftIconContainerStyle={{ marginRight: 10 }}></Input>
      </View >
      <View style={styles.loginButton}>
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: 'rgba(111, 202, 186, 1)',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
          containerStyle={{
            marginHorizontal: "40%",
            height: "50%",
            width: "150%",
            marginVertical: 20,
          }}

        />
      </View>
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loginInputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 350,
    width: "85%"
  },
  loginButton: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150
  },
  noAccount: {
    marginLeft: 100,
    color: 'rgba(9, 146, 156, 1)',
    textDecorationLine: 'underline',

  },
  buttonNewAccountText: {
    fontSize: 11,
  }
}
)

export default LoginScreen;