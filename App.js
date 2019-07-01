import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Explore from "./screens/Explore";
import Inbox from "./screens/Inbox";
import Trips from "./screens/Trips";
import Saved from "./screens/Saved";
import Profile from "./screens/Profile";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to AirBnB!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Explore: Explore,
    Saved: Saved,
    Trips: Trips,
    Inbox: Inbox,
    Profile: Profile
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
