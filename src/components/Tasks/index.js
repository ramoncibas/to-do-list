import React from "react";
import { Feather } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Text } from "react-native";
import {
  ContainerTask,
  TextTask,
  ContainerButton,
  ActionContainer
} from "./styles";

export default function Tasks({ data, selectedItem, deleteItem }) {
  const RightActions = () => {
    return (
      <ActionContainer onPress={() => deleteItem(data.id)}>
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
