import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>

      <View style={styles.inputContainer}>
        <View style={[styles.action, { marginBottom: 20 }]}>
          <Feather
            style={{ paddingBottom: 10, color: "#1e88e5" }}
            name="user"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setUsername(val)}
          />
        </View>

        <View style={[styles.action, { marginBottom: 20 }]}>
          <Feather
            style={{ paddingBottom: 10, color: "#1e88e5" }}
            name="mail"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
          />
        </View>

        <View style={[styles.action, { marginBottom: 20 }]}>
          <Feather
            style={{ paddingBottom: 10, color: "#1e88e5" }}
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
          />
        </View>

        <View style={styles.action}>
          <Feather
            style={{ paddingBottom: 10, color: "#1e88e5" }}
            name="lock"
            color="#05375a"
            size={20}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => setConfirmPassword(val)}
          />
        </View>

        <Button title="Sign In" containerStyle={{ marginTop: 30 }} />
        <View style={styles.createAccountContainer}>
          <Text>Already have an account? </Text>
          <Button
            title="Login"
            type="clear"
            buttonStyle={{ padding: 0 }}
            titleStyle={{ fontSize: 14 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    color: "#1e88e5",
    padding: 10,
    margin: 20,
  },
  inputContainer: {
    width: "75%",
  },
  createAccountContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 16,
  },
});

export default SignUp;
