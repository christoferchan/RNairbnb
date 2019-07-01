import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: "PROFILE",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" color={tintColor} size={24} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profiles</Text>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
