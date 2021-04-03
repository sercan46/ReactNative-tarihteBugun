import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import StepperComponent from './src/components/Stepper'
import TarihteBugunComponent from './src/components/TarihteBugun'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" screenOptions={{
        headerStyle: { elevation: 0 },
        cardStyle: { backgroundColor: '#fff' }
      }}>
        <Stack.Screen name="Ana Sayfa" component={StepperComponent} options={{
          headerStyle: {
            height: 0
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="tarihteBugun" component={TarihteBugunComponent} options={{
          title:'Tarihte Bugün',
          headerStyle: {
            backgroundColor:'tomato'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
