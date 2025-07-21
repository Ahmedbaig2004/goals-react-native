import { useState } from "react";
import { View, TextInput, Button, Modal,Image } from "react-native";
import { StyleSheet } from "react-native";


const Goalinput = ({ addGoal, modalvisible,hidemodal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  

  const handleTextInput = (e) => {
    setEnteredGoal(e);
  };
  const handleAddGoal = () => {
    addGoal(enteredGoal);
    setEnteredGoal("");
  };


  return (
    <Modal visible={modalvisible} animationType="slide" style={{margin:0}} statusBarTranslucent>
      <View style={styles.TextButtonContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")}/>

        <TextInput
          style={styles.TextInputBox}
          placeholder="Enter Your Goal"
          placeholderTextColor={"white"}
          onChangeText={handleTextInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handleAddGoal} title="Add Goal "/>
          </View>
          <View style={styles.button}>
            <Button onPress={hidemodal} title="Cancel" color={"pink"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  TextButtonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",    
    paddingHorizontal:20,
    backgroundColor:"#311b6b"
  },
  TextInputBox: {
    width: "100%",
    padding: 10,
    borderWidth: 2,
    borderColor: "pink",
    color:"white",
    backgroundColor:"#c67ac1ff"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 30,
    gap: 5,
  },
  button:{
    width:100,

  },
  image:{
    width:100,
    height:100
  }
});
export default Goalinput;
