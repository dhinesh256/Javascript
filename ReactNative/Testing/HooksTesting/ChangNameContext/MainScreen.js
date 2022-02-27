import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text } from "react-native";

import { Input, Button } from "./Components";
import { useName } from "./NameManager";

export const MainScreen = ({ name, saveName }) => {
  const [newName, setNewName] = React.useState(null);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <Text style={styles.headerText}>Welcome, {name || "No Name"}!</Text>

      <Input label="Name" placeholder="Example" value={newName} onChangeText={(text) => setNewName(text)}/>

      <Button text="Change" onPress={() => {
          saveName(newName);
          setNewName(null);
        }}
      />
    </KeyboardAvoidingView>
  );
};

export default (props) => {
  const { name, saveName } = useName();

  return <MainScreen name={name} saveName={saveName} {...props} />;
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      paddingHorizontal: 40,
    },
    headerText: {
      color: "#353031",
      fontWeight: "bold",
      fontSize: 34,
      marginBottom: 10,
    },
  });
  
  