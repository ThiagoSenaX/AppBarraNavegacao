import * as React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

export default function Esportes(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Jogos da Libertadores </Text>
      <Image style={estilo.img} source={require("../assets/futeboll.jpg")}/>
      <Text style={estilo.txt}>O primeiro jogo entre Palmeiras e Atlético-MG será no Allianz Parque, no dia 21 (terça-feira), às 21h30 (de Brasília). Já a partida de volta será na semana seguinte, dia 28, com mando do time mineiro. O Mineirão ainda não fol confirmado como palco da segunda partida. 
      Já o Flamengo encara o Barcelona (EQU) no dia 22 (quarta-feira), às 21h30 (de Brasília), no estádio Mané Garrincha, na capital brasileira. A volta está marcada para o dia 29, no mesmo horário, no Estádio Monumental, no Equador.</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'top',
  alignItems: 'center',
  backgroundColor: '#98FB98'
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
  borderColor: '#2E8B57'
},
txt:{
  marginLeft: 30,
  marginRight: 30,
  textAlign: 'justify'

}

})