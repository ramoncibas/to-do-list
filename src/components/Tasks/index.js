import React from "react";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Alert } from "react-native";
import {
  ContainerTask,
  TextTask,
  ContainerButton,
  ActionContainer
} from "./styles";

export default function Tasks({ data, selectedItem, deleteItem }) {
  // Asking the user if he even wants to delete the task
  const handleAlert = () => {
    Alert.alert(
      "Deseja mesmo excluir?",
      `Anotação "${data.title}"`,
      [
        {
          text: "Cancel",
          onPress: () => {
            console.log("Calcel Pressed")
            return;
          },
          style: "cancel"
        },
        {
          text: "Excluir", 
          onPress: () => {
            console.log("Excluir Pressed")
            return deleteItem(data.id);
          }
        }
      ]
    )
  }

  // Swipe button to delete task
  const RightActions = () => {
    return (
      <ActionContainer onPress={() => handleAlert()}>
        <Feather name="trash" color="#fff" size={24}/>
      </ActionContainer>
    );
  };

  return (
    <ContainerTask>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton activeOpacity={0.8} onPress={() => selectedItem(data)}>
          <TextTask>{data.title}</TextTask>
        </ContainerButton>
      </Swipeable>
    </ContainerTask>
  );
}
