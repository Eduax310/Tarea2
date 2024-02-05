import React from 'react';
import { View, Text, Button } from 'react-native';

const Inicio = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>Bienvenido</Text>
      <Button
        title="Mi Perfil"
        onPress={() => navigation.navigate('Mi Perfil')}
      />
      <Button
        title="Persona Admirada"
        onPress={() => navigation.navigate('Persona Admirada')}
      />
    </View>
  );
}

export default Inicio;
