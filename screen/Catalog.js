import React from 'react';
import { View, Text, Button } from 'react-native';

const Catalog = ({ navigation }) => {
  return (
    <View>
      <Text>Flower Catalog</Text>
      {/* Tampilkan katalog produk bunga di sini */}
      <Button title="Go to Checkout" onPress={() => navigation.navigate('Checkout')} />
    </View>
  );
}

export default Catalog;