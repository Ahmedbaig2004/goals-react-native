import { use, useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import Goalinput from "./components/Goalinput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalvisible, setmodalvisible] = useState(false);

  const handleAddGoal = (enteredGoal) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setmodalvisible(false)
  };
  const deleteGoal = (id) => {
    return setCourseGoals((courseGoals) =>
      courseGoals.filter((goal) => goal.id !== id)
    );
  };

  const showmodal = () =>{
    setmodalvisible(true)
  }
  const hidemodal =()=>{
    setmodalvisible(false)
  }
  return (
    <>

    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button title="Click to add Goals" onPress={showmodal} />
      {modalvisible&&<Goalinput addGoal={handleAddGoal} modalvisible={modalvisible} hidemodal ={hidemodal} />}

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDelete={deleteGoal}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingRight:20,
    paddingLeft:20,
    backgroundColor:"#1e085a"
    
  },

  goalsContainer: {
    marginTop:25,
    flex: 6,
    
  },
});
