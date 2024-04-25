import React, { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';

import { 
  StyleSheet, 
  Text, 
  View, 
  ActivityIndicator, // spinner
  TextInput, 
  Button,
  Pressable, // Botão Personalizado
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';


import axios from 'axios';

import { stylesButton, stylesButtonImage, stylesButtonNew, stylesHomeScreen, stylesTasks } from '../Home/styles';

import { SafeAreaProvider } from 'react-native-safe-area-context';
// inserção de área segura do dispositivo para Android e iOS.

import { stylesAddScreen, stylesButtonAddNew, stylesCategoriaEscolhida, stylesCategorias } from './styles';


const API_URL = 'https://tarefandoo.vercel.app/todo';

const AddScreen = () => {
    
    const data = [
      { value: 'Casa' },
      { value: 'Estudos' },
      { value: 'Trabalho' },
      { value: 'Outros' },
    ];
  
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
  
    const [taskType, setTaskType] = useState('');
     {/* 'Casa', 'Trabalho', 'Outros', 'Estudos' */}
  
    // ADICIONAR
    const addTask = async () => {
      if (newTask.trim() === '') {
        Alert.alert('Atenção!', 'Por favor, insira um nome para a tarefa.',);
        return;
      }
      if (taskDesc.trim() === '') {
        Alert.alert('Atenção!', 'Por favor, insira uma descrição para a tarefa.',);
        return;
      }
      if (taskType.trim() === '') {
        Alert.alert('Atenção!', 'Por favor, escolha uma categoria para a tarefa.',);
        return;
      }
      try {
        const response = await axios.post(API_URL, {
          tarefa: newTask,
          desc: taskDesc,
          categoria: taskType,
        });
        setTasks([...tasks, response.data]);
        setNewTask('');
        setTaskDesc('');
        setTaskType('');
        Alert.alert('Tarefa adicionada',);
      } catch (error) {
        console.error('Erro adicionando tarefa:', error);
      }
    };
  
    return (
  
      <SafeAreaProvider style={stylesAddScreen.container}>
      <View>
  
       <ScrollView>
          
            {/* Adicionar */}
  
            <View style={[stylesAddScreen.boxInput,]}>
              <TextInput style={[stylesAddScreen.title, stylesAddScreen.input]}
                placeholder="Nome da tarefa"
                value={newTask}

                maxLength={30}

                multiline={true}
                textAlignVertical='top'
                // placeholderTextColor='#0C1B33'
                //numberOfLines={2}

                onChangeText={text => setNewTask(text)}
              />
  
              <TextInput style={stylesAddScreen.text}
                placeholder="Descrição da tarefa"
                value={taskDesc}
 
                multiline={true}
                textAlignVertical='top'
                // placeholderTextColor='#0C1B33'
                numberOfLines={11}
                maxLength={245}

                onChangeText={text => setTaskDesc(text)}
              />
            </View>
  
            {/* CATEGORIAS */}
            <View>
              <Text style={stylesCategorias.title}> Categorias</Text>
              {data.map((item) => {
                
                return (
                  <Pressable onPress={() => setTaskType(item.value)} style={stylesCategorias.button}>
                    <Image source={require('../../assets/outline_bookmark.png')} style={stylesCategorias.image}></Image>
                    <Text style={stylesCategorias.text}> {item.value}</Text>
                  </Pressable>
                )
                
              })}
              <View style={stylesCategoriaEscolhida.button}>
                <Image source={require('../../assets/fill_bookmark.png')} style={stylesCategorias.image}></Image>
                <Text style={stylesCategoriaEscolhida.text}>Opção Escolhida: {taskType}</Text>
              </View>
            </View>
  
  
            {/* BOTÃO ADICIONAR */}
            <Pressable style={[stylesButtonAddNew.button, stylesButtonNew.shadowProp]} onPress={addTask}>
                <Text style={stylesButtonAddNew.text}>Adicionar Tarefa</Text>
                <Image source={require('../../assets/plus.png')} style={stylesButtonNew.image}/>
            </Pressable>
  
  
            </ScrollView>
  
      </View>
  
      
      </SafeAreaProvider>
    );
  };
  
export default AddScreen;
  