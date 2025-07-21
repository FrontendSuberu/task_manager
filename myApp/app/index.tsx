import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    },
    {
      id: 2,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
    },
    {
      id: 3,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
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
    },
  ];

  return (
    // a component used to make our app view to stay in it's right place - like to avoid overlapping with camera
    <SafeAreaView style={styles.container}>
      {/* custom header in our app */}
      <View style={styles.header}>
        <Text>SmartTask</Text>
        <View style={styles.banner} />
      </View>

      {/* // used for displaying our tasks only when in view and also */}
      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <View>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

// styling for our homepage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    letterSpacing: 0.25,
    fontFamily: "HelveticeaMedium",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    height: 30,
    backgroundColor: "#eee",
  },
  banner: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "#d3d3d3",
  },
});
