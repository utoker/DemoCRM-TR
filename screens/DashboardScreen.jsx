import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Layout, Text, Card, Divider } from '@ui-kitten/components';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category='h1' style={styles.header}>Dashboard</Text>

        <Card style={styles.card}>
          <Text category='h4'>Sales Overview</Text>
          <Divider style={styles.divider} />
          <Text>Here could be a chart or summary numbers</Text>
        </Card>

        <Card style={styles.card}>
          <Text category='h4'>Latest Orders</Text>
          <Divider style={styles.divider} />
          <Text>List of the most recent orders...</Text>
        </Card>

        <Card style={styles.card}>
          <Text category='h4'>Notifications</Text>
          <Divider style={styles.divider} />
          <Text>Any important alerts or information...</Text>
        </Card>
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  layout: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    margin: 8,
  },
  divider: {
    marginVertical: 8,
  },
});

export default DashboardScreen;
