import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../components/layout';
import {useNavigation} from '@react-navigation/native';

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

function TrailerDetail({route}) {
  const navigation = useNavigation();
  const {trailerDetail} = route.params
  const formattedLastDate = formatDate(trailerDetail.last_date);
  const formattedDate = formatDate(trailerDetail.date);


    const handleEditTrailerPress = async (id) => {
    try {
        const response = await fetch(`http://10.0.2.2:8000/api/v1/trailers/detail/${trailerDetail.id}/`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            });
        const data = await response.json();
        // setSelectedTrailer(data);
        navigation.navigate('EditTrailer', { editTrailer: data });
        console.log(trailerDetail.id)
      } catch (error) {
        console.log(trailerDetail.id)
        console.error('Error fetching trailer details:', error);
      }
  };

  const handleBillPress = () => {
    navigation.navigate('Bill', { bill: data });
  };

  return (
    <Layout>
        <View style={styles.container}>
        <Image
          source={require('../../assets/logo/Kirpi.png')}  // Eklenecek resmin yolu
          style={styles.image}
        />
        <Text style={styles.title}>{trailerDetail.serial_number}</Text>
        <Text>Önceki Hesaplama Tarihi: {formattedLastDate}</Text>
        <Text>Önceki Elektrik Kullanımı: {trailerDetail.last_t0}</Text>

        <Text>Son Hesaplama Tarihi: {formattedDate}</Text>
        <Text>Son Elektrik Kullanımı: {trailerDetail.t0}</Text>
        <Text>Fiyat: {trailerDetail.price}</Text>
        {/* Diğer detaylar için gerekli alanları ekleyin */}

        <TouchableOpacity style={styles.button} onPress={handleEditTrailerPress}>
          <Text style={styles.buttonText}>Güncelle</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={handleBillPress}>
          <Text style={styles.buttonText}>Fatura</Text>
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
    title: {
      fontSize: 20,
      marginBottom: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50, // Yarıçapı, yani resmin yuvarlak görünmesini sağlar
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        padding: 10,
        backgroundColor: '#3468C0',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
  });


export default TrailerDetail;
