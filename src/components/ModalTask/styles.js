import styled from "styled-components";

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`  
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  top: 10px;
  left: 10px;
`;

export const TaskContainer = styled.View`
  margin: 0 5%;
  justify-content: center;
  align-items: center;
`;

export const TaskTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin: 20px 0;
`;

export const InputTask = styled.TextInput`
  width: 100%;
  height: 50px;

  background-color: #fff;
  padding: 0 10px;

  border: 1px solid #c5c5c5;
  border-radius: 10px;
`;

export const InputTaskDescription = styled.TextInput`
  width: 100%;
  height: 50%;

  background-color: #fff;
  
  margin-top: 10px;
  padding: 0 10px;

  border: 1px solid #c5c5c5;
  border-radius: 10px;
`;

export const ButtonTask = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  padding: 10px;
  margin-top: 10px;

  background-color: #2d2a50;

  border: 1px solid #c5c5c5;
  border-radius: 10px;
`;

export const ButtonTaskText = styled.Text`
  font-size: 18px;
  color: #fff;
`;