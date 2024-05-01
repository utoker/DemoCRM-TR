import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Layout, Text, List, Card, Divider, Icon, Input } from '@ui-kitten/components';
import useDebounce from '../hooks/useDebounce';
import staticCustomers from '../data/müşteri_listesi.json'
// import api from '../api/api'; // Uncomment when using API

// Import Icon components and functions correctly
const PhoneIcon = (props) => <Icon {...props} name='phone-outline' />;
const HomeIcon = (props) => <Icon {...props} name='home-outline' />;
const PersonIcon = (props) => <Icon {...props} name='person-outline' />;

const CustomersScreen = () => {


  const [customers, setCustomers] = useState(staticCustomers);
  const [filteredCustomers, setFilteredCustomers] = useState(staticCustomers);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  /*
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get('customers');
        setCustomers(response.data); // Save original data
        setFilteredCustomers(response.data); // Initialize display data
      } catch (error) {
        console.error('Failed to fetch customers:', error);
        alert('Failed to load customer data');
      }
    };

    fetchCustomers();
  }, []);
  */

  useEffect(() => {
    const results = debouncedSearchQuery ? customers.filter(customer =>
      (customer.CARI_ISIM && customer.CARI_ISIM.toLowerCase().includes(debouncedSearchQuery.toLowerCase())) ||
      (customer.CARI_KOD && customer.CARI_KOD.toLowerCase().includes(debouncedSearchQuery.toLowerCase())) ||
      (customer.CARI_TEL && customer.CARI_TEL.includes(debouncedSearchQuery)) ||
      (customer.CARI_ADRES && customer.CARI_ADRES.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
    ) : customers;

    setFilteredCustomers(results);
  }, [debouncedSearchQuery, customers]);

  const clearInput = () => {
    setSearchQuery('');
  };

  const renderClearIcon = (props) => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon {...props} name='close-outline' />
    </TouchableWithoutFeedback>
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Text category='s1' style={styles.title}>
        <PersonIcon style={styles.icon} /> Cari Kod: {item.CARI_KOD}
      </Text>
      <Divider style={styles.divider} />
      <Text category='p1'>
        <PersonIcon style={styles.icon} /> Name: {item.CARI_ISIM}
      </Text>
      <Text category='p1'>
        <PhoneIcon style={styles.icon} /> Phone: {item.CARI_TEL}
      </Text>
      <Text category='p1'>
        <HomeIcon style={styles.icon} /> Address: {item.CARI_ADRES}
      </Text>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <Input
        style={styles.searchInput}
        placeholder="Search by name, code, phone, or address"
        value={searchQuery}
        onChangeText={setSearchQuery}
        accessoryRight={searchQuery ? renderClearIcon : null}
      />
      <List
        data={filteredCustomers}
        renderItem={renderItem}
        keyExtractor={item => item.CARI_KOD}
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
    padding: 10,
  },
  title: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center'  },
    divider: {
      marginVertical: 8,
    },
    icon: {
      width: 22,
      height: 22,
      marginRight: 5,
    },
    searchInput: {
      padding: 10,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
  });
  
  export default CustomersScreen;
