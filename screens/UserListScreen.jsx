import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Layout, List, ListItem, Text, Divider } from '@ui-kitten/components';

const usersData = [
  { "ID": 1, "KULLANICI": "admin", "SIFRE": "123", "PLASIYER": "38", "ADMIN": true },
  { "ID": 2, "KULLANICI": "kasa", "SIFRE": "4444", "PLASIYER": "00", "ADMIN": false },
  { "ID": 3, "KULLANICI": "samet", "SIFRE": "333333", "PLASIYER": "33", "ADMIN": false },
  { "ID": 4, "KULLANICI": "berkay", "SIFRE": "414141", "PLASIYER": "41", "ADMIN": false }
];

const UserListScreen = () => {
  const renderItem = ({ item }) => (
    <ListItem
      title={evaProps => (
        <View style={styles.itemContainer}>
          <Text {...evaProps} style={[evaProps.style, item.ADMIN ? styles.adminTitle : styles.userTitle]}>
            {item.KULLANICI}
          </Text>
          <View style={item.ADMIN ? styles.adminBadge : styles.userBadge}>
            <Text style={{ color: '#fff' }}>{item.ADMIN ? 'Admin' : 'User'}</Text>
          </View>
        </View>
      )}
      description={`ID: ${item.ID} - Plasiyer: ${item.PLASIYER}`}
      style={styles.listItem}
    />
  );

  return (
    <Layout style={styles.container}>
      <List
        data={usersData}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listItem: {
    marginVertical: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E8E8E8'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns children to each end
    alignItems: 'center',
    width: '100%',
  },
  adminTitle: {
    fontWeight: 'bold',
    color: '#D84315' // Dark red for admins
  },
  userTitle: {
    color: '#4E4E4E' // Grey for regular users
  },
  adminBadge: {
    backgroundColor: '#D84315',
    padding: 4,
    borderRadius: 4
  },
  userBadge: {
    backgroundColor: '#4E4E4E',
    padding: 4,
    borderRadius: 4
  }
});

export default UserListScreen;
