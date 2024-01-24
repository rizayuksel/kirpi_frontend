import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../components/layout';
import { useNavigation } from '@react-navigation/native';

function EditPrice() {
  const navigation = useNavigation();
  const [price, setPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');

  const handleGuncellePress = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/v1/paramaters/price/1/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: parseFloat(price) }), // Örneğin, price'ı bir float'a çeviriyoruz
      });

      if (response.ok) {
        alert('Veri güncellendi: ' + price);
        fetchData();

        // Başarılı güncelleme durumunda navigasyon veya başka işlemleri burada yapabilirsiniz
      } else {
        alert('Veri güncelleme başarısız oldu.');
      }
    } catch (error) {
      console.error('Veri güncelleme hatası:', error);
      alert('Veri güncelleme hatası');
    }
  };

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/v1/paramaters/price/1/');
      const data = await response.json();
      setCurrentPrice(data.price);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo/Kirpi.png')} // Eklenecek resmin yolu
          style={styles.image}
        />
        <Text style={styles.label}>Mevcut Birim Fiyat: {currentPrice} TL</Text>
        <Text style={styles.label}>Güncel Fiyat:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Güncel Fiyatı Girin"
          value={price}
          onChangeText={text => setPrice(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleGuncellePress}>
          <Text style={styles.buttonText}>Güncelle</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#3468C0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Yarıçapı, yani resmin yuvarlak görünmesini sağlar
    marginBottom: 16,
  },
});

export default EditPrice;
