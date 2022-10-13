
import React,{useRef,useEffect} from 'react';
import { Button, View, useWindowDimensions, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {init} from '../../../database/db';
import CustomDrawer from '../../../CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../../../Navigation/ProfileScreen';
import ShopScreen from '../../../Navigation/ShopScreen';
import FavouriteScreen from '../../../Navigation/FavouriteScreen';
import CartScreen from '../../../Navigation/CartScreen';
import SignInScreen from '../SignInScreen/SignInScreen';
const Drawer = createDrawerNavigator();

init()
.then(()=>{
    console.log('Database creation succeeded!');
}).catch((err)=>{
  console.log('Database IS NOT initialized! '+err);
});

const AppScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        height: height,
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
        drawerActiveBackgroundColor: '#e4f2e5',
        drawerActiveTintColor: '#000000'
      }}>
           <Drawer.Screen name="Sign In"  component={SignInScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('Info here')}
            title="Info"
            color="#112619"
            
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="person-circle" size={22} color={color} />
          )
          }}/>
          <Drawer.Screen name="Shop"  component={ShopScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('Info here')}
            title="Info"
            color="#112619"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="shirt-outline" size={22} color={color} />
          )
        }} />      
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{
          headerRight: () => (
            <Button
            onPress={() => alert('Info here')}
            title="Info"
            color="#112619"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="person-circle-outline" size={22} color={color} />
          )
        }} />
    
        <Drawer.Screen name="Cart" component={CartScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('Info here')}
            title="Info"
            color="#112619"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          )
        }} />
        <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{
           headerRight: () => (
            <Button
            onPress={() => alert('Info here')}
            title="Info"
            color="#112619"
            ></Button>
          ),
          drawerIcon: ({color}) => (
            <Ionicons name="heart-outline" size={22} color={color} />
          )
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  const styles = StyleSheet.create({
    root: {
      flex: 3,
      alignItems: 'center',
      padding: 20,
  },
  })
};

export default AppScreen;