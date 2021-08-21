import * as React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

export default function Carros(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Direção autônoma: startup demonstra IA </Text>
      <Image style={estilo.img} source={require("../assets/carro.jpg")}/>
      <Text style={estilo.txt}>Os carros com direção autônoma estão impressionando cada vez mais e hoje uma startup britânica mostrou como um carro consegue ser conduzido com a tecnologia no centro de Londres em meio ao tráfego intenso. Veja agora como a nova inteligência artificial desenvolvida pela Wayve funciona.</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'top',
  alignItems: 'center',
  backgroundColor: '#ADD8E6'
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
  borderColor: '#191970'
},
txt:{
  marginLeft: 30,
  marginRight: 30,
  textAlign: 'justify'

}

})