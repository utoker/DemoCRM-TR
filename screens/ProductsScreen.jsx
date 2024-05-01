import React, { useState } from 'react';
import { StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Layout, Text, List, Card, Divider, Input } from '@ui-kitten/components';
import useDebounce from '../hooks/useDebounce';
import staticProducts from '../data/stok.json';

const placeholderImage = require('../assets/placeholder.png');

const ProductsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Text category='s1'>{item.STOK_ADI}</Text>
      <Text category='p1'>Kod: {item.STOK_KODU}</Text>
      <Divider style={styles.divider} />
      <Image 
        source={item.RESIM && item.RESIM !== 'null.png' && item.RESIM !== 'HMM_null.png' ? { uri: item.RESIM } : placeholderImage} 
        style={styles.image} 
      />
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="İsim veya kod ile ara"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <List
          data={staticProducts}
          renderItem={renderItem}
          keyExtractor={item => item.STOK_KODU}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 10,
    padding: 10,
  },
  divider: {
    marginVertical: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 96,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ProductsScreen;
