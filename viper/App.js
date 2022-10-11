
import React,{useRef,useEffect} from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {init} from './database/db';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../viper/Navigation/ProfileScreen';
import ShopScreen from '../viper/Navigation/ShopScreen';
import FavouriteScreen from '../viper/Navigation/FavouriteScreen';
import CartScreen from '../viper/Navigation/CartScreen';

const Drawer = createDrawerNavigator();

init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

const App = () => {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor:'transparent',
          elevation: 0,
          shadowOpacity: 0,
        },
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          fontFamily: 'Roboto-Medium',
        },
        drawerActiveBackgroundColor: '#D1FE95',
        drawerActiveTintColor: '#000000'
      }}>
          <Drawer.Screen name="Shop"  component={ShopScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#00cc00"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="shirt-outline" size={22} color={color} />
          )
        }} />      
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => (
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#00cc00"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          )
        }} />
    
        <Drawer.Screen name="Cart" component={CartScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#00cc00"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          )
        }} />
        <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#00cc00"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="heart-outline" size={22} color={color} />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;