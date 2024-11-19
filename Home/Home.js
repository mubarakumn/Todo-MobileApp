import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from '../Components/Task';
import { useState } from 'react';

export default function Home() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [plash, setPlash] = useState(true)

  const handleAddTask = () =>{
    Keyboard.dismiss()
    newTask && setTasks((prev)=>(
      [...prev, newTask]
    ))
    setNewTask("")
  }

  const removeTask = (index) =>{
    const newArray = [...tasks]
    newArray.splice(index, 1)
    setTasks(newArray)
    return newArray
  }

  return (
    <View style={styles.container}>

      {/* <StatusBar style="" /> */}
      {/* Today's task */}
      <View style={styles.content}>
        <Text style={styles.heading}>Today's Task</Text>

        <View style={styles.tasks}>
          {/* The tasks */}
          {
            tasks.map((task, index)=>{
              return <Task key={index} text={task} press={()=> removeTask(index)}/>
            })
          }
        </View>
      </View>

      {/* Where to write the Task */}

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
         style={styles.input}
         value={newTask}
         onChangeText={(text)=> setNewTask(text)}
         placeholder='Write your task' />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eded',
  },
  content: {
    paddingTop: 80,
    paddingHorizontal: 20

  },
  heading: {
    fontSize: 24,
    fontWeight: "bold"
  },
  tasks: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    padding: 10,
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  addText:{
    fontSize: 40,
    fontWeight: "300",
    color: "#55bcff"
  },
});
