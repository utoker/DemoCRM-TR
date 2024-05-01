import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, List, Card, Input } from '@ui-kitten/components';
import transactionsData from '../data/faturalar.json'


const InvoicesScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(transactionsData);

  const handleSearch = (text) => {
    setQuery(text);
    const formattedQuery = text.toLowerCase();
    const filtered = transactionsData.filter(item => {
      return item.STOK_ADI.toLowerCase().includes(formattedQuery) ||
             item.STOK_KODU.toLowerCase().includes(formattedQuery) ||
             item.FISNO.toLowerCase().includes(formattedQuery);
    });
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card} status='basic'>
      <Text category='h6' style={styles.title}>{item.STOK_ADI}</Text>
      <Text category='s1' style={styles.detail}>Stock Code: {item.STOK_KODU}</Text>
      <Text category='s1' style={styles.detail}>Amount: {item.TUTAR}</Text>
      <Text category='s1' style={styles.detail}>Unit Price: {item.STHAR_BF}</Text>
      <Text category='s1' style={styles.detail}>Tax Rate: {item.KDV_ORANI}%</Text>
      <Text category='p2' style={styles.date}>Date: {new Date(item.STHAR_TARIH).toLocaleDateString()}</Text>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="Search by Stock Name, Code, or FISNO..."
        value={query}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <List
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.INCKEYNO.toString()}
      />
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
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    marginBottom: 5,
  },
  date: {
    marginTop: 5,
    fontStyle: 'italic',
  },
  searchInput: {
    margin: 10,
  }
});

export default InvoicesScreen;
