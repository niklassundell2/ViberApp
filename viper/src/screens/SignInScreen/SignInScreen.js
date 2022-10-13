import React, { useState } from 'react'
import {SafeAreaView, View, Text, Image, TextInput, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import AppScreen from '../AppScreen/AppScreen';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';


const SignInScreen = ({navigation}) => {
    var login = false;
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    
    const { height } = useWindowDimensions();

    const setLogin = () => {
        var login = true;
        
       }
    
    const onSignInPressed = () => {
        
  };

 
  




 if (login==false) return (
    <View style={styles.root}>
        <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
        />
        
        <CustomInput placeholder="Username"
            value={username}
            setValue={setUsername}
        />
        <CustomInput placeholder="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry
        />

        <CustomButton text="Sign In" onPress={setLogin} />

    </View>
        
);

};




const styles = StyleSheet.create({
    root: {
        flex: 3,
        alignItems: 'center',
        padding: 20,
    },
    
    AppScreen: {
        flex: 1,
        backgroundColor: '#F9FBFC'
    },
    logo: {
        width: '70%',
        maxWidth: 400,
        maxHeight: 500,
    },
    listStyle:{
        flex:8,
        alignItems:"center",
        backgroundColor:"#eee",
        borderColor:"green",
        borderWidth:2,
        width:"100%",
    },
    flatliststyle:{
        width:'80%',
        backgroundColor:'blue',
      },
    });

export default SignInScreen;