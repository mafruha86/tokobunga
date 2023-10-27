import React from 'react';
import { View, Text, Button } from 'react-native';

const Checkout = ({ navigation }) => {
  return (
    <View>
      <Text>Checkout</Text>
      {/* Tambahkan proses checkout di sini */}
      <Button title="Go back to Catalog" onPress={() => navigation.navigate('Catalog')} />
    </View>
  );
}

export default Checkout;