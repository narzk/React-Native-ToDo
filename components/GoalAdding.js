import react from "react";
import reactDom from "react-dom";
import {
  TouchableOpacity,
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  Modal,
} from "react-native";

const GoalAdding = (props) => {
  return (
    <Modal visible={props.isOpenModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="this is"
          value={props.entering}
          onChangeText={props.addGoal}
        />
        <TouchableOpacity>
          <Button title="add" onPress={props.addButton} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 50,
  },
  inputStyle: {
    padding: 2,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 10,
  },
});
export default GoalAdding;
