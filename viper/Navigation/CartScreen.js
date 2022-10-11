import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import {readCart} from 'viper/database/db';
import { deleteItem } from 'viper/database/db';


const CartScreen = () => {
  const [cart, setCart]=useState([]);
  const [visibility, setVisibility] = useState(false);
  const [id, setId] = useState();
  const [name, setName] = useState();

  const keyHandler = (item, index) => {
    return index.toString();
  };

  async function fetchCart(){
    try{
      const dbResult = await readCart();
      console.log(dbResult);
      setCart(dbResult);
    }
    catch(err){
      console.log(err);
    }
  }

  const cancelDelete = () => {
    setVisibility(false);
  };

  const selectItem = (id, name) => {
    setVisibility(true);
    setId(id);
    setName(name);
  };

  async function deleteItemFromDb(){
    try{
      const dbResult = await deleteItem(id);
      
    }
    catch(err){
      console.log(err);
    }
    finally{
      fetchCart();
      setVisibility(false);
    }
  }
    
    const renderCart = item => {

        return (
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              selectItem(
                item.item.id,
                item.item.name,
              )
            }>
            <View style={styles.listItemStyle}>
              <Text style={styles.listTextstyle}>{item.item.name}</Text>
              <Text style={styles.listTextstyle}>{item.item.price}</Text>
              <Text style={styles.listTextstyle}>{item.item.size}</Text>
            </View>
            </TouchableOpacity>
        );
    };

  return (
    <View style={styles.container}>
        <Modal visible={visibility} animationType="slide">
          <Button style={styles.buttonStyle} title="Close" onPress={cancelDelete} />
          <View style={styles.listItemStyle}>
  
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.listTextstyle}>Description</Text>
            <Button
                style={styles.buttonStyle}
                title="Yes"
                onPress={deleteItemFromDb}
            /><Button
            style={styles.buttonStyle}
            title="No"
            onPress={cancelDelete}
        />

            </View>
          
        </Modal>
        
      <View style={styles.listStyle}>
        <Button
          style={styles.buttonStyle}
          title="Read Cart"
          onPress={fetchCart}
        />
        <Button
          style={styles.buttonStyle}
          title="Log"
          onPress={console.log(cart)}
        />
        <FlatList
          style={styles.flatliststyle}
          keyExtractor={keyHandler}
          data={cart}
          renderItem={renderCart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    flatliststyle: {
      width: '80%',
      backgroundColor: 'white',
    },
    sizeStyle: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    nameStyle: {
      alignSelf: 'center',
      flexDirection: 'row',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
    },
    listItemStyle: {
      borderWidth: 1,
      padding: 5,
      width: '80%',
      alignSelf: 'center',
      margin: 3,
    },
    listTextstyle: {
      alignSelf: 'center',
      flexDirection: 'row',
    },
    listStyle: {
      flex: 8,
      alignItems: 'center',
      backgroundColor: '#eee',
      width: '100%',
    },
    buttonStyle: {
      margin: 2,
      padding: 5,
      width: '20%',
    },
    sizeButtonStyle: {
      padding: 5,
      width: '25%',
    },
    cartButton: {
      padding: 5,
      width: '60%',
    },
    imageContainer: {
      height: 200,
      width: '100%',
      overflow: 'hidden',
  
      alignSelf: 'center',
    },
    image: {
      height: '100%',
      width: '100%',
    },
  });

export default CartScreen