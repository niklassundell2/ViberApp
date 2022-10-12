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

import SelectDropdown from 'react-native-select-dropdown';
import {addCart} from 'viper/database/db';




const ShopScreen = (props,ref) => {
    const [visibility, setVisibility] = useState(false);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const sizes = ['S', 'M', 'L', 'XL'];
    var size = "";
    const [cart,setCart] = useState([]);
    const [productList, addProduct] = useState([]);
  
    const addcart = item =>{
      addCart(name,price,size);
      setVisibility(false);
    };
  
    const keyHandler = (item, index) => {
      return index.toString();
    };

    const fetchProduct = async () => {
        try {
          let response = await fetch(
            'http://10.0.2.2:8080/rest/productservice/readproduct',
          );
          let json = await response.json();
          addProduct(json);
          
        } catch (error) {
          console.log(error);
        }
      };
    
  
    const cancelProduct = () => {
      setVisibility(false);
    };
    const selectProduct = (name, description, price, image) => {
      setVisibility(true);
      setName(name);
      setPrice(price);
      setDescription(description);
      setImage(image);
    };
  

    const renderProduct = item => {
        
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            selectProduct(
              item.item.name,
              item.item.description,
              item.item.price,
              item.item.image,
            )
          }>
          <View style={styles.listItemStyle}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: item.item.image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.listTextstyle}>{item.item.name}</Text>
            <Text style={styles.listTextstyle}>{item.item.price} €</Text>
          </View>
        </TouchableOpacity>
      );
    };
  
    return (
      <View style={styles.container}>
        <Modal visible={visibility} animationType="slide">
          <Button style={styles.buttonStyle} title="Close" onPress={cancelProduct} />
          <View style={styles.listItemStyle}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
  
            <Text style={styles.nameStyle}>{name}</Text>
            <Text style={styles.listTextstyle}>Description</Text>
            <Text style={styles.listTextstyle}>{description}</Text>
            <Text style={styles.listTextstyle}>{price} €</Text>
            <View style={styles.sizeStyle}>
              <SelectDropdown
                data={sizes}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
  
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  size = selectedItem;
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  return item;
                }}
              />
            </View>
            <View style={styles.sizeStyle}>
              <View style={styles.cartButton}>
                <Button title="Lisää ostoskoriin" onPress={addcart}/>
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.listStyle}>
          <Button
            style={styles.buttonStyle}
            title="Read Products"
            onPress={fetchProduct}
          />

          <FlatList
            style={styles.flatliststyle}
            keyExtractor={keyHandler}
            data={productList}
            renderItem={renderProduct}
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

export default ShopScreen