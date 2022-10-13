import React, {useState, useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {readProfile} from 'viper/database/db';

const ProfileScreen = () => {
    const [usersList, addUsers] = useState([]);

    const keyHandler = (item, index) => {
      return index.toString();
    };
    async function readUser(){
      try{
        const dbResult = await readProfile();
        console.log(dbResult);
        addUsers(dbResult);
      }
      catch(err){
        console.log(err);
      }
    }
    
  
    const renderProduct = item => {
      
      return (
          <View style={styles.listItemStyle}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.item.image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.listTextstyle}>{item.item.name}</Text>
            <Text style={styles.listTextstyle}>{item.item.points} ViperPoints</Text>
            <View style={styles.logOut}>
            <Button
            style={styles.logOut}
            title="Log out"
            onPress={readUser}
          />
          </View>
          </View>
      );
    };
  
    return (
  
        <View style={styles.listStyle}>
          <Button
            style={styles.buttonStyle}
            title="Show Profile"
            onPress={readUser}
            
          />
          <FlatList
            style={styles.flatliststyle}
            keyExtractor={keyHandler}
            data={usersList}
            renderItem={renderProduct}
          />
        </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    flatliststyle: {
      width: '80%',
      backgroundColor: 'white',
  
    },
  
    listItemStyle: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
    },
    listTextstyle: {
      alignSelf: 'center',
      flexDirection: 'row',
      fontSize:20,
    },
    listStyle: {
      flex: 8,
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      borderColor:"green",
      
    },
    logOut:{
      marginTop: 20,
      padding: 5,
      width: '100%',
      alignSelf: 'center',
      color: 'green'
    },
    buttonStyle: {
      margin: 2,
      padding: 5,
      width: '20%',
      color: 'green'
    },
  
  
    imageContainer: {
      height: 200,
      width: 200,
      overflow: 'hidden',
      alignSelf: 'center',
      borderRadius:200,
      borderWidth:4,
      borderColor:"#99ff99",
      marginBottom: "5%",
    },
    image: {
      height: '100%',
      width: '100%',
    },
  });

export default ProfileScreen