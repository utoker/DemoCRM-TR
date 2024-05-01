// screens/OrdersScreen.js

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, List, Card, Button } from '@ui-kitten/components';

const OrdersScreen = ({navigation}) => {
    const ordersData = [
        {
          id: 1,
          title: 'Order 001',
          details: '5 items',
          date: '2023-04-20',
          items: [
            { name: 'Product A', quantity: 2, price: '$150' },
            { name: 'Product B', quantity: 3, price: '$200' },
          ],
          total: '$750'
        },
        {
          id: 2,
          title: 'Order 002',
          details: '3 items',
          date: '2023-04-21',
          items: [
            { name: 'Product C', quantity: 1, price: '$300' },
            { name: 'Product D', quantity: 2, price: '$400' },
          ],
          total: '$1100'
        },
        {
          id: 3,
          title: 'Order 003',
          details: '1 item',
          date: '2023-04-22',
          items: [
            { name: 'Product E', quantity: 1, price: '$500' }
          ],
          total: '$500'
        },
      ];
      

      const handleOrderDetails = (order) => {
        navigation.navigate("OrderDetails", { ...order });
      };
      
  const renderItem = ({ item }) => (
    <Card style={styles.card} status='basic'>
      <Text category='h6'>{item.title}</Text>
      <Text category='s1'>Details: {item.details}</Text>
      <Text category='p2'>Date: {item.date}</Text>
      <Button
        style={styles.button}
        size='small'
        onPress={() => handleOrderDetails(item)}>
        View Details
      </Button>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <List
        data={ordersData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
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
  },
  button: {
    marginTop: 10,
  },
});

export default OrdersScreen;
