import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity,ImageBackground, Alert } from 'react-native';
import estiloLogin from './estiloLogin';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SimpleLineIcons } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }
    
    return (
        <View style={estiloLogin.container}>
            
            <ImageBackground source={require('../../../assets/imagens/sky.jpg')} style={estiloLogin.fundo}>
            
            <View style={estiloLogin.borda}>

                <View style={estiloLogin.logoContainer}>
                    <AntDesign name="smileo" size={50} color="white" />
                </View>

                <View style={estiloLogin.campoContainer}>
                <MaterialIcons name="person" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                </View>

                <View style={estiloLogin.campoContainer}>

                <MaterialCommunityIcons name="key" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
                </View>
            
            <TouchableOpacity onPress={entrar}>                
                <LinearGradient colors={['#3A506B', '#5BC0BE']}
                style={estiloLogin.botaoLinearGradient}>
                
                    <SimpleLineIcons name="login" size={24} color="white"/>
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                
                </LinearGradient>
            </TouchableOpacity>

            </View>

            </ImageBackground>
            
        </View>
    )
}

export default Login;
