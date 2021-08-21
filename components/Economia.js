import * as React from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';

export default function Economia(){
  return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Economia </Text>
      <Image style={estilo.img} source={require("../assets/economia.jpg")}/>
      <Text style={estilo.txt}>O secretário do Tesouro e Orçamento do Ministério da Economia, Bruno Funchal, disse nesta 6ª feira (20.ago.2021) que o governo deve melhorar a meta fiscal de 2022 e projeta a volta do superavit primário em 2023. Guedes e Funchal afirmaram ter compromisso com leis fiscais como o teto de gastos. O ministro disse que o novo Bolsa Família vai respeitar o mecanismo. Já o secretário indicou que a ideia de criar um fundo para pagar precatórios pode ser revista caso a medida seja julgada como uma ameaça ao teto.</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'top',
  alignItems: 'center',
  backgroundColor: '#FFF8DC'
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
  borderColor: '#FFD700'
},
txt:{
  marginLeft: 30,
  marginRight: 30,
  textAlign: 'justify'

}

})