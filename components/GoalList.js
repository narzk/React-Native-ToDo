import react from "react";
import reactDom from "react-dom";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const GoalList = (props) => {
  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        {props.list.map((item) => (
          <TouchableOpacity
            key={Math.random()}
            onPress={() => props.deleteItem(item.id)}
          >
            <View style={styles.card}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 10,
  },
  inputStyle: {
    padding: 2,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
  },
  card: {
    padding: 10,
    borderColor: "#0483D2",
    borderWidth: 1,
    borderRadius: 40,
    // shadowColor: "#ccc",
    // shadowOffset: { width: 3, height: 3 },
    marginBottom: 15,
    backgroundColor: "#B8E4FF",
  },
});
export default GoalList;
