import styled from "styled-components";

export const TaskListContainer = styled.View`
  flex: 1;
  background-color: #EFEFEF;
  padding: 80px 20px 0 20px;
`;

export const Header = styled.View`  
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonTask = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #FFF;
  justify-content: center;
  align-items: center;
  border-color: #C0C0C0;
  border-width: 1px;
`;

export const TitleTaskList = styled.Text`
  font-size: 18px;
`;


export const ListItemTask = styled.FlatList``;