import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from "react-native";

import { CheckBox } from "@rneui/themed";


/*
  {
    task: "Buy food",
    completed: false
  }
*/

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");


  function saveTask() {
    setTasks((prevState) => [...prevState, { task: text, completed: false }]);
    setText("");
  }

  function handleCheckBox() {

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Quebec Todo App</Text>
      </View>
      <View>
        <TextInput
          placeholder="Enter task"
          style={styles.textInput}
          autoCapitalize
          cursorColor="#000"
          onChangeText={(text) => setText(text)}
          value={text}
          onSubmitEditing={saveTask}
        />
      </View>
      <ScrollView>
        {tasks.map((t, index) => (
          <View style={styles.taskContainer} key={(2 * (index) - 1) * (2 * (index + 1) - 1)}>
            <Text style={styles.taskText}>{t.task}</Text>
            <TouchableOpacity onPress={handleCheckBox}>
              <CheckBox checked={t.completed} title="" size={25}/>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 50,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  textInput: {
    borderWidth: 2,
    marginTop: 25,
    padding: 10,
    borderRadius: 7,
  },
  taskContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    marginTop: 20,
    marginLeft: 30,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
