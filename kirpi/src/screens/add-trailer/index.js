import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../components/layout';
import {useNavigation} from '@react-navigation/native';

function AddTrailer() {
  const navigation = useNavigation();
  const [serialNumber, setSerialNumber] = useState('');
  const handleGuncellePress = () => {
    // Güncelleme işlemleri buraya eklenebilir
    alert('Karavan Kaydedildi: ' + serialNumber);
  };
  return (
    <Layout>
        <View style={styles.container}>
        <Image
          source={require('../../assets/logo/Kirpi.png')}  // Eklenecek resmin yolu
          style={styles.image}
        />
      <Text style={styles.label}>Seri Numarası:</Text>
      <TextInput
        style={styles.input}
        placeholder="Seri Numarasını Girin"
        value={serialNumber}
        onChangeText={(text) => setSerialNumber(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleGuncellePress}>
        <Text style={styles.buttonText}>Kaydet</Text>
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
  


export default AddTrailer;
