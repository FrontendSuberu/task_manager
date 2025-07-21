import { FlatList, StyleSheet } from "react-native";


export default function Index() {
  const cartData = [
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
      deadline: "21/07/2025",
    },
    {
      id: 5,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
    },
    {
      id: 6,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
    },
    {
      id: 7,
      title: "Wash clothes",
      description:
        "After my morning activities. Do this also make sure that you add mom and dad's clothes as well.",
      status: "pending",
      importance: "Very important",
      deadline: "21/07/2025",
    },
  ];

  return (
    <FlatList></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
