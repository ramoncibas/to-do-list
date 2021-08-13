import styled from "styled-components";

export const ModalContainer = styled.View`
  flex: 1;
`;

export const Container = styled.View`  
  flex: 1;
  background-color: #12141D;
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
  color: #fff;
`;

export const InputTask = styled.TextInput`
  width: 100%;
  height: 50px;

  background-color: #1E2029;
  padding: 0px 10px;

  border: 1px solid #2A2C34;
  border-radius: 5px;
`;

export const InputTaskDescription = styled.TextInput`
  width: 100%;
  height: 50%;

  background-color: #1E2029;
  margin-top: 10px;
  padding: 0 10px;

  border: 1px solid #2A2C34;
  border-radius: 5px;
`;

export const ButtonTask = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  padding: 10px;
  margin-top: 10px;

  background-color: #FF934F;

  border: 1px solid #666;
  border-radius: 10px;
`;

export const ButtonTaskText = styled.Text`
  font-size: 18px;
  color: #fff;
`;