import AddScreen from './src/screens/Add/index.js'
import HomeScreen from './src/screens/Home/index.js';
import TaskScreen from './src/screens/Task/index.js';
 
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { theme } from './src/theme/index.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Lista de Tarefas', 
            headerStyle: {
            backgroundColor: theme.colors.brand.purple_yam,
            },
            headerTintColor: theme.colors.brand.naples_yellow,
            headerTitleStyle: {
            fontFamily: theme.font_family.regular,
            fontSize: theme.font_size.xl
            },
          }}
        />
        <Stack.Screen
          name="Nova"
          component={AddScreen}
          options={{
            title: 'Nova Tarefa', 
            headerStyle: {
            backgroundColor: theme.colors.brand.purple_yam,
            },
            headerTintColor: theme.colors.brand.naples_yellow,
            headerTitleStyle: {
            fontFamily: theme.font_family.regular,
            fontSize: theme.font_size.xl
            },
          }}
        />  
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{
            title: 'Tarefa', 
            headerStyle: {
            backgroundColor: theme.colors.brand.purple_yam,
            },
            headerTintColor: theme.colors.brand.naples_yellow,
            headerTitleStyle: {
            fontFamily: theme.font_family.regular,
            fontSize: theme.font_size.xl
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

 
// const App = () => {
//   return (
//     // <NavigationContainer>
//     <SafeAreaProvider>
//       <Header />
//       <HomeScreen />
//     </SafeAreaProvider>
//     //</NavigationContainer>
//   );
// };
 
export default App;