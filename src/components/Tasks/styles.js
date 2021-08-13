import styled from "styled-components";

export const ContainerTask = styled.View``;

export const ContainerButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  
  padding: 25px;
  margin-bottom: 20px;

  border-radius: 10px;
  
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextTask = styled.Text`
  max-width: 80%;
`;

export const ActionContainer = styled.TouchableOpacity`
  width: 20%;  
  height: 50px;
  
  margin: 7px 10px;

  justify-content: center;
  align-items: center;

  background-color: #FF934F;
  border-radius: 7px;
`;