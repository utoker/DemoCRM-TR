// screens/OrderDetailsScreen.js

import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Layout, Text, Card, Divider } from '@ui-kitten/components';

const OrderDetailsScreen = ({ route }) => {
    const { orderId, date, items = [], total } = route.params; // Default to an empty array if items are undefined
  
    return (
      <ScrollView style={styles.container}>
        <Layout style={styles.layout}>
          <Text category='h1' style={styles.title}>Order Details</Text>
          <Card style={styles.card}>
            <Text category='h6'>Order ID: {orderId}</Text>
            <Text category='s1'>Date: {date}</Text>
            <Divider style={styles.divider} />
            <Text category='s1' style={styles.sectionTitle}>Items:</Text>
            {items.map((item, index) => (
              <View key={index} style={styles.itemRow}>
                <Text category='p1'>{item.name} - {item.quantity} pcs</Text>
                <Text category='p1'>{item.price}</Text>
              </View>
            ))}
            <Divider style={styles.divider} />
            <Text category='h6'>Total Amount: {total}</Text>
          </Card>
        </Layout>
      </ScrollView>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 10,
  },
  sectionTitle: {
    marginTop: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  divider: {
    marginVertical: 10,
  },
});

export default OrderDetailsScreen;
