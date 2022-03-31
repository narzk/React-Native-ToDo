import { StyleSheet, Text, View, Button } from "react-native";
import react, { useState } from "react";
import GoalAdding from "./components/GoalAdding";
import GoalList from "./components/GoalList";

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const addButtonHandler = () => {
    value !== "" && setList([...list, { value: value, id: Math.random() }]);
    setValue("");
    setOpen(false);
  };
  const onChangeHandeler = (entering) => {
    setValue(entering);
  };
  const deleteHandeler = (id) => {
    setList(list.filter((item) => item.id !== id));
    console.log("***");
  };
  return (
    <View>
      <GoalAdding
        addGoal={onChangeHandeler}
        entering={value}
        addButton={addButtonHandler}
        isOpenModal={open}
      />
      <View style={{ alignItems: "center", marginTop: 100 }}>
        <Button title="add a task" onPress={() => setOpen(true)} />
        <Text style={{ marginTop: 15 }}>
          {list.length > 0 && <Text>Tap on the task to delete</Text>}
        </Text>
      </View>
      <GoalList list={list} deleteItem={deleteHandeler} />
    </View>
  );
}

const styles = StyleSheet.create({});
