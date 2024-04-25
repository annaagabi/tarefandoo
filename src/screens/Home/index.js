import React, { useState, useEffect } from 'react';

import { Loading } from '../../components/Loading';

import { 
  Text, 
  View, 
  ActivityIndicator, // spinner
  TextInput, 
  Pressable, // Botão Personalizado
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';


import axios from 'axios';

import { stylesButtonDelete, stylesButtonImage, stylesButtonNew, stylesHomeScreen, stylesTasks, stylesTopHome, stylesViewHome, stylesViewTasks } from './styles';

import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.


const API_URL = 'https://tarefandoo.vercel.app/todo';

const HomeScreen = ({navigation}) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // DELETAR
  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`${API_URL}/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
      Alert.alert('Tarefa Excluída!',);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const getTaskById = (taskId) => {
    return tasks.find(task => task._id === taskId);
  };

  return (
    
    <SafeAreaProvider style={stylesHomeScreen.container}>
      
    <View>
      {/* se as tarefas não foram carregadas */}
      {!tasks ? ( 
      <Loading />
      ) : (
        // se foi carregado
        <>

     <ScrollView style={stylesViewHome.container}>
        
          {/* TODAS AS TAREFAS + EXCLUIR */}
          <View style={stylesTopHome.container}>
            <Text style={[stylesTopHome.title]}>Minhas Tarefas</Text>
              {/*<Pressable style={[stylesTopHome.button]}>
                <Image source={require('../../assets/filter.png')} style={stylesTopHome.image}/>
              </Pressable>*/}
          </View>

          {tasks.map(task => (
            <View key={task._id} style={[stylesViewTasks.container,]}>

                {/* Componente Tasks */}
                <Pressable style={[stylesTasks.container, stylesTasks.shadowProp]} onPress={() => {
                const selectedTask = getTaskById(task._id);
                // Faça algo com a tarefa selecionada, por exemplo, navegar para uma tela de detalhes
                navigation.navigate('Task', { task: selectedTask });
              }}>
          
                  <Text style={[stylesTasks.text, stylesButtonImage.padding]}>{task.tarefa}</Text>

                  {/* Botão deletar */}
                  <Pressable style={[stylesButtonDelete.button, stylesButtonDelete.shadowProp]} onPress={() => deleteTask(task._id)}>
                    {/* <Text style={stylesButtonDelete.text}>Excluir</Text> */}
                    <Image source={require('../../assets/trash.png')} style={stylesButtonDelete.image}/>
                  </Pressable>

                </Pressable>
              
              {/* <Text style={stylesTasks.text}>{task.desc}</Text>
              <Text style={stylesTasks.text}>{task.categoria}</Text>
              <Text style={stylesTasks.text}>{task.situacao}</Text> */}

            </View>
          ))}

          </ScrollView>

        </>
        
      )}
    </View>

    <Pressable style={[stylesButtonNew.button, stylesButtonNew.shadowProp]} onPress={() =>
        navigation.navigate('Nova')}>
      <Text style={stylesButtonNew.text}>Nova Tarefa</Text>
      <Image source={require('../../assets/plus.png')} style={stylesButtonNew.image}/>
    </Pressable>
    </SafeAreaProvider>
  );

};

export default HomeScreen;
