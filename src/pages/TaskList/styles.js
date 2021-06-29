import styled from "styled-components";

export const TaskListContainer = styled.View`
  flex: 1;
  background-color: #0d1117;
  padding: 50px 20px 0 20px;
`;

export const Header = styled.View`  
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonTask = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 50px;
  height: 50px;

  border: 1px solid #333;
  border-radius: 50px;

  background-color: #FFF;
  justify-content: center;
  align-items: center;
  
`;

export const ContainerEmpty = styled.View`
  margin-top: 15%;
  align-items: center;
`;

export const TitleWarning = styled.Text`
  font-size: 18px;
  color: #f1e05a;
`;


export const ListItemTask = styled.FlatList``;