import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
      container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   }, 
   header:{
      height: 100,
      width: '100%',
      backgroundColor: 'black',
      flexDirection: 'row',
      alignItems: 'flex-end'
   },
   fundo:{
        justifyContent:'center',
        width: '100%',
        height: '100%'
    },

   borda: {   
      backgroundColor: '#081a31',  
      width: '80%',
      height: 230,
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 150,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      backgroundColor: '#14417b',
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoBackground:{
      width:"100%",
      height: 150,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: 'white'
   },
   botaoTexto: {
      fontSize: 18,
      color: 'white',
      backgroundColor: '#2c2c2e',
      width: '110%',
      height: 25,
      textAlign: 'center',
      fontWeight: 'bold'
   },
});

  export default estiloInicial;