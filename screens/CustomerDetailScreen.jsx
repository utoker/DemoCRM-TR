import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';

const CustomerDetailScreen = ({ route }) => {
  const { customer } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Layout style={styles.layout}>
        <Card style={styles.card}>
          <Text category='h1' style={styles.title}>Customer Details</Text>
          
          <View style={styles.detailContainer}>
            <Text category='s1' style={styles.detailTitle}>Name:</Text>
            <Text category='p1'>{customer.CARI_ISIM}</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text category='s1' style={styles.detailTitle}>Code:</Text>
            <Text category='p1'>{customer.CARI_KOD}</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text category='s1' style={styles.detailTitle}>Telephone:</Text>
            <Text category='p1'>{customer.CARI_TEL}</Text>
          </View>

          <View style={styles.detailContainer}>
            <Text category='s1' style={styles.detailTitle}>Address:</Text>
            <Text category='p1'>{customer.CARI_ADRES}</Text>
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%', // Adjust based on your layout preference
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  detailTitle: {
    fontWeight: 'bold',
  },
});

export default CustomerDetailScreen;
