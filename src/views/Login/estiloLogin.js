import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
    fundo:{
        justifyContent:'center',
        width: '100%',
        height: '100%'
    },

   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '80%', 
       marginLeft: '10%',
      marginRight: '10%',
      height: 230,
      borderRadius: 10,
   },
   logoContainer:{
       alignItems: 'center',
       marginBottom: 15,
   },

   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
    campoContainer:{
       flexDirection: 'row',
       padding: 10,
       paddingLeft: 10,
       paddingRight: 50,
       margin: 10,
       borderRadius: 5,
       borderColor: 'white'
    },
   campo: {
      fontSize: 18,
      color: 'gray',
      marginLeft: 15,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderColor: 'white'
    },
   botaoLinearGradient:{
       flexDirection: 'row',
       justifyContent: "center",
       alignItems: 'center',
       margin: 20,
       marginLeft: 50,
       marginRight: 50,
       height: 50,
       paddingLeft: 15,
       paddingRight: 15,
       borderRadius: 8 
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      marginLeft: 5,
      fontWeight: 'bold'
   },
});

  export default estiloLogin;