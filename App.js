import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";

/*
  {
    task: "Buy food",
    completed: false
  }
*/

export default function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")

  function saveTask() {
    setTasks(prevState => [...prevState, {task: text, completed: false}])
    setText("")
    console.log(tasks)
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
          {
            tasks.map((t) => (
              <View>
                <Text>{t.task}</Text>
              </View>
            ))
          }
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
    marginTop: 10,
    padding: 10,
    borderRadius: 7
  }
});
