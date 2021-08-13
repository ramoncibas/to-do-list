import React, { useState, useEffect } from "react";
import { Modal, ActivityIndicator} from "react-native";
import { Feather } from "@expo/vector-icons";

import Tasks from "../../components/Tasks";
import {
  TaskListContainer,
  Header,
  Title,
  ContainerEmpty,
  TitleWarning,
  ButtonTask,
  ListItemTask,
} from "./styles";

import ModalTask from "../../components/ModalTask";

import { deleteTask, getTaskSave } from "../../utils/storeTask";

export default function TaskList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  
  // Getting the tasks saved in local storage
  useEffect(() => {
    const getTask = async () => {
      const result = await getTaskSave("mytask");
      setData(result);
      setLoading(false);
    }

    getTask();
  })  

  // Passing data of the selected item
  const handleItem = (item) => {
    setData(item);
    setModalVisible(true);
    console.log(item);
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
      </Header>
      {
        loading && (
          <ContainerEmpty>
            <ActivityIndicator color="#fff" size={25}/>
          </ContainerEmpty>
        )
      }

      {
        !loading && data == "" && (
          <ContainerEmpty>
            <TitleWarning>Você ainda não tem anda!</TitleWarning>
          </ContainerEmpty>
        )
      }
      <ListItemTask
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Tasks data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <ButtonTask onPress={() => setModalVisible(true)}>
        <Feather name="plus" color="#fff" size={24}/>
      </ButtonTask>

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalTask onClose={() => setModalVisible(false)} data={data} />
      </Modal>
    </TaskListContainer>
  );
}
