import AsyncStorage from "@react-native-async-storage/async-storage";

// Get saved Task
export const getTaskSave = async (key) => {
  const myTaks = await AsyncStorage.getItem(key);

  let taskSaves = JSON.parse(myTaks) || [];

  return taskSaves;
}

// Save a Task to local storage
export const saveTask = async (key, newTask) => {
  const taskStored = await getTaskSave(key);

  const hasTask = taskStored.some(task => task.id === newTask.id);
  if (hasTask) return;

  taskStored.push(newTask);
  await AsyncStorage.setItem(key, JSON.stringify(taskStored));
}

// Delete a specific "Task"
export const deleteTask = async (task, id) => {
  let myTask = task.filter(item => { return (item.id !== id) });

  await AsyncStorage.setItem("mytask", JSON.stringify(myTask));
  return myTask;
}