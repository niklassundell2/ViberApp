import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#D1FE95' }}>
            <ImageBackground source={require('./images/ViberLogo1.png')}
            style={{
                height:80,
                width:70,
                alignSelf:'center'
                }}>      
            </ImageBackground>
            <View style={{flex:1,backgroundColor:'#fff',padding:10}}>
            <DrawerItemList {...props} />
            
            </View>
        
        </DrawerContentScrollView>
        <View style={{padding:10,borderTopWidth:1,borderTopColor:'#ccc'}}>
            <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="exit-outline" size={22} />
                <Text style={{
                    fontSize:16,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 10,
                    }}>
                    Sign out 
                </Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
      
    );
};

export default CustomDrawer