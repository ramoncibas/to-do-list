import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, ActivityIndicator } from "react-native";
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

import { saveTask, updateTask } from "../../utils/storeTask";

export default function ModalTask({ onClose, data }) {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState({ title:"", description:""});

  // Title modal component
  const TitleModal = () => {
    return (
      <TaskTitle>{ data.title ? "Sua Anotação" : "Faça uma Anotação" }</TaskTitle>
    );
  }

  // Saving a task to local storage
  const handleSaveTask = async () => {
    setLoading(true);
    let randomId = () => {
      return Math.floor(Math.random() * (255 - 1)) + 1;
    };

    try {
      let result = { 
        title: inputText.title, 
        description: inputText.description, 
        id: data.id || randomId() 
      };
      await saveTask("mytask", result);
      setLoading(false);
      onClose();

    } catch(error) {
      console.log(error);
      alert("Ops! parece que algo deu errado!");
    }
  }

  return (
    <ModalContainer>
      <Container>
        <Header>
          <TouchableOpacity onPress={ onClose }>
            <Feather name="x" color="#FF934F" size={30} />
          </TouchableOpacity>
        </Header>

        <TaskContainer>
          <TitleModal/>
          
          <InputTask
            placeholder="Titulo..."
            placeholderTextColor="#fff"
            value={data.title ? data.title : inputText.title}
            onChangeText={(text) => setInputText((prevState) => {
              return {...prevState, title: text}
            })}
          />
          <InputTaskDescription
            placeholder="Descrição..."
            placeholderTextColor="#fff"
            value={data.title ? data.description : inputText.description}
            onChangeText={(text) => setInputText((prevState) => {
              return {...prevState, description: text}
            })}
          />

          <ButtonTask onPress={handleSaveTask}>
            {
              loading
              ? <ActivityIndicator color="#fff" size={24}/>
              : <ButtonTaskText>Salvar</ButtonTaskText>
            }
          </ButtonTask>
        </TaskContainer>

      </Container>
    </ModalContainer>
  );
}
