import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Evaluacion from './components/evaluacion/evaluacion';
import { SafeAreaView } from 'react-native-safe-area-context';

const PersonaAdmirada = ({ navigation }: { navigation: any }) => {

  const [calification, setCalification] = useState(0);
  const [nombre, setNombre] = React.useState('Nikola Tesla');
  const [fechaNacimiento, setFechaNacimiento] = React.useState('10 de julio de 1856');
  const [descripcion, setDescripcion] = React.useState('Nikola Tesla fue un inventor, ingeniero eléctrico y mecánico serbio nacionalizado estadounidense, ​​​ célebre por sus contribuciones al diseño del moderno suministro de electricidad de corriente alterna');
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
      <Image source={require('./imagenes/Nikola.jpeg')} style={{ width: 100, height: 150 }} />

      <SafeAreaView>
        <Evaluacion calification={calification} onCalificationChange={handleCalificationChange} />
      </SafeAreaView>

      <Text>Nombre: {nombre}</Text>
      <Text>Fecha de Nacimiento: {fechaNacimiento}</Text>
      <Text>Descripcion: {descripcion}</Text>

      <Button
        title="Regresar al Menú"
        onPress={() => navigation.navigate('Inicio')}
      />
    </View>
  );
}

export default PersonaAdmirada;
