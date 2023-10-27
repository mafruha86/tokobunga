import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Flower Shop!</Text>
      {/* Tambahkan daftar produk bunga di sini */}
      <Button title="Go to Catalog" onPress={() => navigation.navigate('Catalog')} />
    </View>
  );
}

export default Home;