import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Evaluacion from './components/evaluacion/evaluacion';
import { SafeAreaView } from 'react-native-safe-area-context';

const Perfil = ({ navigation }: { navigation: any }) => {

  const [calification, setCalification] = useState(0);
  const [nombre, setNombre] = React.useState('Eduardo Ordóñez Marrder');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('1 de Diciembre de 2004');
  const [pasatiempos, setPasatiempos] = React.useState('Jugar Videojuegos y hacer manualidades');
  const handleCalificationChange = (valor: number) => {
    if (calification === 1 && valor === 1) {
      setCalification(0.5);
    } else if (calification === 0.5 && valor === 1){
      setCalification(0);
    }else if (calification === 2 && valor === 2){
      setCalification(2.5);
    }else if (calification === 3 && valor === 3){
      setCalification(3.5);
    }else if (calification === 4 && valor === 4){
      setCalification(4.5);
    }else if (calification === 5 && valor === 5){
      setCalification(5.5);
    }else if(calification !== valor){
      setCalification(valor);
    }
  };
  

  return (
    <View>
      <Image source={require('./imagenes/eduardo.jpg')} style={{ width: 100, height: 100 }} />

      <SafeAreaView>
        <Evaluacion calification={calification} onCalificationChange={handleCalificationChange} />
      </SafeAreaView>

      <Text>Nombre: {nombre}</Text>
      <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
      <Text>Pasatiempos: {pasatiempos}</Text>

      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

export default Perfil;
