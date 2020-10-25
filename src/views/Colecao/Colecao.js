import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import estiloLista from '../../components/Lista/estiloLista';
import { Ionicons } from '@expo/vector-icons'; 

function Colecao({ navigation, route }) {

    const [colecao, setColecao] = useState([
        {
            id:'1',
            titulo: 'Admiravel Mundo Novo',
            descricao: 'Um classico moderno...',
            autor: 'Aldous Huxley',
            anoPublicacao: '1932',
            foto: require('../../../assets/itens/1.jpg'),
        },
        {
            id:'2',
            titulo: '1984',
            descricao: 'Uma das obras mais contudentes...',
            autor: 'George Orwell',
            anoPublicacao: '1949',
            foto:require('../../../assets/itens/2.jpg'),
        },
        {
            id:'3',
            titulo: 'Laranja Mecanica',
            descricao: 'Publicado pela primeira vez em 1962...',
            autor: 'Anthony Burgess',
            anoPublicacao: '1962',
            foto:require('../../../assets/itens/3.jpg'),
        },
        {
            id:'4',
            titulo: 'Neuromancer',
            descricao: 'O ceu sobre o porto...',
            autor: 'William Gibson',
            anoPublicacao: '1984',
            foto:require('../../../assets/itens/4.jpg'),
        }
    ])
    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
           
           <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <Ionicons name="md-arrow-back" size={24} color="white" />
                </TouchableOpacity>    
                <Text style={estiloColecao.texto}>Coleção</Text>
                <Ionicons name="ios-add" size={24} color="white"/>
           </View>

           <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            data={colecao}
            renderItem={({item}) => <Lista data={item} />}   
           />
        </View>
    )
}

export default Colecao;
