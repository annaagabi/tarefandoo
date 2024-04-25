import React from 'react';
import { View, Text } from 'react-native';

const API_URL = 'https://tarefandoo.vercel.app/todo';

const TaskScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhes da Tarefa</Text>
      <Text>Tarefa: {task.tarefa}</Text>
      <Text>Descrição: {task.desc}</Text>
      <Text>Categoria: {task.categoria}</Text>
    </View>
  );
};

export default TaskScreen;
  
  

  