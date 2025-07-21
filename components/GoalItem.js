import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const handledelete = () => {
    props.onDelete(props.id);
  };
  return (
    <View style={styles.goalstyle}>
      <Pressable
        android_ripple={{ color: "#af1d1dff" }}
        onPress={handledelete}
        style={({ pressed }) => pressed && styles.pressContainer}
      >
        <Text style={styles.TextStyles}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalstyle: {
    
    marginBottom: 11,
    borderRadius: 8,
    backgroundColor: "aqua",
    overflow: "hidden",
  },
  TextStyles: {
    padding: 8,
  },
  pressContainer: {
    opacity: 0.5,
  },
});
