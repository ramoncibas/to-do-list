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

import { saveTask } from "../../utils/storeTask";

export default function ModalTask({ onClose, data }) {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState({title:"", description:""});
  
  const CheckData = () => {
    if(Array.isArray(data) == true) {
      return <TaskTitle>Faça uma Anotação</TaskTitle>;
    } else {
      return <TaskTitle>Sua Anotação</TaskTitle>;
    }
  }
  // Saving a task to local storage
  const handleSaveTask = async () => {
    setLoading(true);
    let randomId = () => {
      return Math.floor(Math.random() * (255 - 1)) + 1
    };

    try {
      let result = {title: inputText.title, description: inputText.description, id: randomId()};
      await saveTask("mytask", result);
      setLoading(false);

      onClose();
    } catch(error) {
      console.log(error);
      alert("Ops! parece que algo deu errao!");
    }    
  }

  return (
    <ModalContainer>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#333" size={30} />
          </TouchableOpacity>
        </Header>

        <TaskContainer>
          <CheckData />
          
          <InputTask
            placeholder="Titulo..."
            placeholderTextColor="#333"
            value={!data ? inputText.title : data.title}
            onChangeText={(text) => setInputText((prevState) => {              
              return {...prevState, title: text}
            })}
          />
          <InputTaskDescription
            placeholder="Descrição..."
            placeholderTextColor="#333"
            value={!data ? inputText.description : data.description}
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
