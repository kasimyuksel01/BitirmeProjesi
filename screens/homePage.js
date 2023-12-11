import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Gerekli ikonları eklemek için

export default function HomePage({ navigation }) {
  const navigateToInventory = () => {
    // Envanter sayfasına yönlendirme işlemi
    navigation.navigate('Inventory');
  };

  const navigateToRecipe = () => {
    // Tarifler sayfasına yönlendirme işlemi
    navigation.navigate('Recipe');
  };

  const navigateToCalculator = () => {
    // Hesaplayıcı sayfasına yönlendirme işlemi
    navigation.navigate('Calculator');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Ana Sayfa</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToInventory}>
          <Text style={styles.buttonText}>Envanterim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToRecipe}>
          <Text style={styles.buttonText}>Yemek Öner</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={navigateToRecipe}>
          <Text style={styles.buttonText}>Tarifler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToCalculator}>
          <Text style={styles.buttonText}>Hesaplayıcı</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="fridge" size={24} color="black" onPress={navigateToInventory} />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="home" size={24} color="green" />
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topBar: {
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  bottomBar: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    alignItems: 'center',
  },
});
