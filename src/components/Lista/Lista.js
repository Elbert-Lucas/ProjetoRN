import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloLista from './estiloLista'

const Lista = ({data}) =>{
    const [item, setItem] = useState(data);
   
    return(
        <View style={estiloLista.areaItens}>
            
            <LinearGradient colors={['#051937', '#004d7a', '#008793', '#00bf72','#a8eb12']}>

                <Text style={estiloLista.itemTitulo}> {item.titulo} </Text>
                <Text style={estiloLista.itemSubTitulo}> {item.autor} ({item.anoPublicacao}) </Text>
                <Image source={item.foto} style={estiloLista.itemFoto} resizeMode='contain'/>
        
            </LinearGradient>
        </View>
    )

}
export default Lista;