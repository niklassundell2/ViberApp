import React,{useRef,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../SignInScreen/SignInScreen';
import AppScreen from '../AppScreen/AppScreen';

const Stack = createNativeStackNavigator();

const ScreenHandler = () => {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
         name="MainApp"
          component={AppScreen} 
          />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ScreenHandler