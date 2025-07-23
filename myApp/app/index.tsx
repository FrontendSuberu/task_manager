import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import { Trash } from "lucide-react-native";

type TaskType = {
  id: number,
  title: string,
  description: string,
  status: string,
  importance: string,
  deadline: string,
  isDone: boolean
}


export default function Index() {
  // array used to hold my data
  const taskData = [
    {
      id: 1,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 2,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 3,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 4,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      startTime: "",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 5,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      startTime: "",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 6,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      startTime: "",
      deadline: "21/07/2025",
      isDone: false,
    },
    {
      id: 7,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      startTime: "",
      deadline: "21/07/2025",
      isDone: false,
    },
  ];

  // states

  return (
    // a component used to make our app view to stay in it's right place - like to avoid overlapping with camera
    <SafeAreaView style={styles.container}>
      {/* custom header in our app */}
      <View style={styles.header}>
        <Text style={styles.logo}>SmartTask</Text>
        <View style={styles.banner} />
      </View>

      {/* searchbar */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Write down a task...."
          style={styles.searchInput}
          clearButtonMode="always"
        />
      </View>

      {/* // used for displaying our tasks only when in view and also */}
      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} />
        )}
      />

      {/* button on pressed allows us to create a task */}
      <KeyboardAvoidingView style={styles.footer} behavior="padding" keyboardVerticalOffset={14}>
        <TextInput placeholder="Add new Task" style={styles.newTaskInput} />
        <TouchableOpacity style={styles.addButton} onPress={()=>{}}>
Add
        </TouchableOpacity>
      </KeyboardAvoidingView>
 
    </SafeAreaView>
  );
}


const TaskItem = ({task}: {task: TaskType}) => {
  <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <View style={styles.taskTitle}>
                <Checkbox value={task.isDone} color={task.isDone ? "#4630eb" : "undefined"} />
                <Text 
                style={{styles.title, task.isDone && {textDecorationLine: "line-through"}}}>{task.title}</Text>
              </View>

              <TouchableOpacity
                  onPress={()=>{
                alert("Deleted" + task.id)
              }}
              >
                <Text style={styles.deleteBtn}>Delete</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={{task.desc, task.isDone && {textDecorationLine: "line-through"}}}>{task.description}</Text>
            </View>
          </View>
}

// styling for our homepage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // gap: 10
  },

  // styles for the header navigation
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBlock: 10,
    paddingHorizontal: 4,
  },

  logo: {
    fontFamily: "HelveticaBold",
    fontSize: 40,
    letterSpacing: -3,
  },

  banner: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "#d3d3d3",
  },

  // tasks card design
  taskCard: {
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    flex: 1,
    gap: 10,
    marginBottom: 12,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    letterSpacing: -1.2,
    fontFamily: "HelveticeaMedium",
  },
  taskTitle: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  desc: {
    fontFamily: "HelveticeaMedium",
    letterSpacing: -0.2,
    fontSize: 16,
  },
  // create task button
  createTaskBtn: {
    padding: 14,
    flexDirection: "row",
    // height: 50,
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#a8c7fa",
    borderRadius: 8,
  },
  buttonText: {
    color: "#062e6f",
    fontSize: 18,
    fontFamily: "HelveticeaMedium",
    textAlign: "center",
  },

  searchBar: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontFamily: "HelveticeaMedium",
    letterSpacing: -1.2,
    outlineColor: "transparent",
    fontSize: 16,
    color: "#333",
  },

  taskHeader: {
    flex: 1,
    flexDirection: "row",
    fontFamily: "HelveticeaMedium",
    letterSpacing: -1.2,
    alignItems: "center",
  },
  deleteBtn: {
    fontFamily: "HelveticeaMedium",
    letterSpacing: -.4,
  },


  // 
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  newTaskInput: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
    borderRadius: 10,
     fontFamily: "HelveticeaMedium",
    letterSpacing: -.4,
    fontSize: 16,
    color: "#333"
  },

  addButton: {
    backgroundColor: "#4630eb",
    padding: 8,
    borderRadius: 10,
    marginLeft: 20
  }
});
