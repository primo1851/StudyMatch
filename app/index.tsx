import React from "react";
import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/themed';

export default function Index() {
  return (
    <View style={styles.container} >

      <View
        style={styles.loginInputContainer}
      >
        <Input placeholder='Email' inputStyle={{ width: "85%" }} leftIcon={{ type: 'font-awesome', name: 'user' }} leftIconContainerStyle={{ marginRight: 10 }}></Input>
        <Input placeholder='Senha' inputStyle={{ width: "85%" }} leftIcon={{ type: 'font-awesome', name: 'lock' }} leftIconContainerStyle={{ marginRight: 10 }}></Input>

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
          onPress={() => console.log('aye')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginInputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "90%",
    width: "85%"
  },
  loginButton: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 150
  }

}
)