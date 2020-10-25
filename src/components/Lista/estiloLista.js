import {StyleSheet} from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens:{
        flex: 1,
    },
    itemTitulo:{
        height:40,
        fontSize:18,
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        paddingTop: 15,
    },
    itemSubTitulo:{
        fontSize: 16,
        color:'white',
        textAlign: 'center',
    },
    itemFoto:{
        height: 300,
        marginTop: 20,
        marginBottom: 20,
    },
})
export default estiloLista;