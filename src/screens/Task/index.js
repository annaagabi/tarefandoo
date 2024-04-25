//import React from 'react';
// import { View, Text } from 'react-native';

const API_URL = 'https://tarefandoo.vercel.app/todo';
  
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

import { stylesTaskScreen, stylesButtonAddNew, stylesCategoriaEscolhida, stylesCategorias } from './styles';


// const TaskScreen = ({ route }) => {
//     const { task } = route.params;
  
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Detalhes da Tarefa</Text>
//         <Text>Tarefa: {task.tarefa}</Text>
//         <Text>Descrição: {task.desc}</Text>
//         <Text>Categoria: {task.categoria}</Text>
//       </View>
//     );
//   };
  
//   export default TaskScreen;
    


const TaskScreen = ({ route }) => {

    const { task } = route.params;
    
    return (
  
      <SafeAreaProvider style={stylesTaskScreen.container}>
      <View>
  
       <ScrollView>
          
            {/* Adicionar */}
  
            <View style={[stylesTaskScreen.boxInput,]}>
              <Text style={[stylesTaskScreen.title, stylesTaskScreen.input]}>{task.tarefa}</Text>
              <Text style={stylesTaskScreen.text}>{task.desc}</Text>
            </View>
  
            {/* CATEGORIAS */}
            <View>
              <Text style={stylesCategorias.title}> Categoria</Text>
              
              <View style={stylesCategoriaEscolhida.button}>
              
                <Image source={require('../../assets/fill_bookmark.png')} style={stylesCategorias.image}></Image>
                <Text style={stylesCategoriaEscolhida.text}>{task.categoria}</Text>
              </View>
            </View>
  
            </ScrollView>
  
      </View>
  
      
      </SafeAreaProvider>
    );
  };
  
export default TaskScreen;
  
  