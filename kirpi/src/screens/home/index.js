import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../components/layout';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const [trailers, setTrailers] = useState([]);
  const navigation = useNavigation(); // useNavigation hook'unu burada tanımla

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/v1/trailers/');
      const data = await response.json();
      setTrailers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleTrailerPress = async id => {
    try {
      const response = await fetch(`http://10.0.2.2:8000/api/v1/trailers/detail/${id}/`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      // setSelectedTrailer(data);
      navigation.navigate('TrailerDetail', { trailerDetail: data });
    } catch (error) {
      console.log(id);
      console.error('Error fetching trailer details:', error);
    }
  };

  const renderTrailerItem = ({ item }) => (
    <TouchableOpacity style={styles.trailerItem} onPress={() => handleTrailerPress(item.id)}>
      <Text style={styles.serialNumber}>{item.serial_number}</Text>
      <Text style={styles.price}>{`Price: ${item.price}`}</Text>
      <Text style={styles.lastDate}>{`Last Date: ${item.last_date}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo/Kirpi.png')} // Eklenecek resmin yolu
        style={styles.image}
      />
      <Text style={styles.title}>Karavanlar</Text>
      <FlatList
        data={trailers}
        keyExtractor={item => item.id.toString()}
        renderItem={renderTrailerItem}
      />
    </View>
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
  trailerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  serialNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 4,
  },
  lastDate: {
    fontSize: 14,
    color: 'gray',
  },
  trailerDetails: {
    padding: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // Yarıçapı, yani resmin yuvarlak görünmesini sağlar
    marginBottom: 16,
  },
});

export default Home;
