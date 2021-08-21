import * as React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

export default function Mundo(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Terror no Afeganistao </Text>
      <Image style={estilo.img} source={require("../assets/afeganistao.jpg")}/>
      <Text style={estilo.txt}>Novos protestos em várias partes do Afeganistão, em celebração ao Dia da Independência, mostram que uma parcela dos afegãos não se intimida com a milícia fundamentalista islâmica, que tornou a retaliar as manifestações, matando ao menos duas pessoas em Asadabad, capital da província de Kunar, no leste do país. Na província de Panjshir (nordeste), Ahmad Massoud, filho de Ahmad Shah Massoud e comandante da Aliança do Norte, conclamou a resistência e pediu armas aos Estados Unidos.</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'top',
  alignItems: 'center',
  backgroundColor: '	#E0FFFF'
},
titulo:{
  fontSize: 26,
  color: '#000000',
  fontWeight: 'bold',
  marginTop: 25,
  textAlign: 'center'
},
img:{
  marginTop: 20,
  marginBottom: 30,
  width: 280,
  height: 200,
  borderWidth: 3,
  borderColor: '#808080'
},
txt:{
  marginLeft: 30,
  marginRight: 30,
  textAlign: 'justify'

}

})