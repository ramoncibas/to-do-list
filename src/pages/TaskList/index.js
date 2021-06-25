import React, { useState, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Modal} from "react-native";
import { Feather } from "@expo/vector-icons";

import Tasks from "../../components/Tasks";
import {
  TaskListContainer,
  Header,
  Title,  
  TitleTaskList,
  ButtonTask,
  ListItemTask,
} from "./styles";

import ModalTask from "../../components/ModalTask";

import { deleteTask, getTaskSave } from "../../utils/storeTask";

export default function TaskList() {
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Getting the tasks saved in local storage
  useEffect(() => {
    const getTask = async () => {
      const result = await getTaskSave("mytask");
      setData(result);
    }

    getTask();
  })  

  // Passing data of the selected item
  const handleItem = (item) => {
    setData(item);
    setModalVisible(true);
  }
  
  // Delete Task from local storage
  const handleDelete = async (id) => {
    const result = await deleteTask(data, id);
    setData(result);
  }  

  return (
    <TaskListContainer>
      <Header>
        <Title>Lista de Tarefas</Title>
        <ButtonTask onPress={() => setModalVisible(true)}>
          <Feather name="plus" color="#000" size={24}/>
        </ButtonTask>
      </Header>
      {
        data == "" && <TitleTaskList>Você ainda não tem anda!</TitleTaskList>
      }
      <ListItemTask
        data= { data }
        keyExtractor={(item) => (item.id)}
        renderItem={({ item }) => <Tasks data={item} selectedItem={ handleItem } deleteItem={ handleDelete }/>}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={ modalVisible } transparent animationType="slide">
        <ModalTask onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </TaskListContainer>
  );
}
