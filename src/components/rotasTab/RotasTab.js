import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Colecao from '../../views/Colecao/Colecao';
import RotasDrawer from '../rotasDrawer/RotasDrawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icones = {
    Inicial : {name: 'home'},
    Colecao : {name: 'storage'},
    Perfil : {name: 'Person'}
}

const RotasTab = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={
      {
        style: {backgroundColor: '#14417b', borderTopColor: 'black'},
        activeTintColor: 'white',
        showLabel: false,
      }
      }
      screenOptions={({route}) => ({
          tabBarIcon:({color, size}) =>{
              const {name} = icones[route.name];
              return <MaterialIcons name={name} size={size} color={color}/>
          }
      })}
      
    >
      <Tab.Screen name="Inicial" 
      component={RotasDrawer} 
      options={{
      unmountOnBlur:true,
      tabBarLabel:'Inicial',
      tabBarIcon: ({color}) =>(
        <MaterialCommunityIcons name="home" size={24} color={color} />
      ),
      }}/>
      <Tab.Screen name="Colecao" 
      component={Colecao}
      options={{
      unmountOnBlur:true,
      tabBarLabel:'Colecao',
      tabBarIcon: ({color}) =>(
        <MaterialIcons name="collections-bookmark" size={24} color={color} />
      ),
      }}/>
      <Tab.Screen name="Perfil" 
      component={Perfil} 
      options={{
      unmountOnBlur:true,
      tabBarLabel:'Perfil',
      tabBarIcon: ({color}) =>(
      <AntDesign name="book" size={24} color={color} />    
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default RotasTab;