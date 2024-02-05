import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './Inicio';
import Perfil from './Perfil';
import PersonaAdmirada from './PersonaAdmirada';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: 'black',
          },
        }}
      >
        <Tab.Screen name="Inicio" component={Inicio} />

        <Tab.Screen name="Mi Perfil" component={Perfil} />

        <Tab.Screen name="Persona Admirada" component={PersonaAdmirada} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
