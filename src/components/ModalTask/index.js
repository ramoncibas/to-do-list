import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {
  ModalContainer,
  Container,
  Header,
  TaskContainer,
  TaskTitle,
  InputTask,
  InputTaskDescription,
  ButtonTask,
  ButtonTaskText
} from "./styles";

import { saveTask } from "../../utils/storeTask";

export default function ModalTask({ onClose, data }) {
  const [inputTextTitle, setInputTextTitle] = useState("");
  const [inputTextDescription, setInputTextDescription] = useState("");

  // Saving a task to local storage
  const handleSaveTask = async () => {
    let randomId = () => {
      return Math.floor(Math.random() * (255 - 1)) + 1;
    };
    let result = {titulo: inputTextTitle, description: inputTextDescription, id: randomId()};
    await saveTask("mytask", result);
    
    onClose();
  }

  return (
    <ModalContainer>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#000" size={30} />
          </TouchableOpacity>
        </Header>

        <TaskContainer>
          {
            !data
            ? <TaskTitle>Sua Anotação</TaskTitle> 
            : <TaskTitle>Faça uma Anotação</TaskTitle>          
          }
          <InputTask
            placeholder="Titulo..."
            placeholderTextColor="#333"
            value={ !data ? inputTextTitle : data.titulo }
            onChangeText={(text) => setInputTextTitle(text)}
          />
          <InputTaskDescription
            placeholder="Descrição..."
            placeholderTextColor="#333"
            value={ !data ? inputTextDescription : data.titulo}
            onChangeText={(text) => setInputTextDescription(text)}
          />

          <ButtonTask onPress={ handleSaveTask }>
            <ButtonTaskText>Salvar</ButtonTaskText>
          </ButtonTask>
        </TaskContainer>

      </Container>
    </ModalContainer>
  );
}
