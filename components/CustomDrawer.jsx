import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { Layout, DrawerItem, DrawerGroup, Text, Icon } from '@ui-kitten/components';

// Define icon components for better visual identification
const InvoiceIcon = (props) => <Icon {...props} name='file-text-outline' />;
const ProductIcon = (props) => <Icon {...props} name='cube-outline' />;
const CustomerIcon = (props) => <Icon {...props} name='people-outline' />;
const SettingsIcon = (props) => <Icon {...props} name='settings-2-outline' />;
const UserIcon = (props) => <Icon {...props} name='person-outline' />;
const AccountingIcon = (props) => <Icon {...props} name='book-outline' />;
const HomeIcon = (props) => <Icon {...props} name='home-outline' />; // Icon for the main menu

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#F7F9FC' }}>
      <Layout style={{ padding: 20 }}>
        {/* Main Menu Item */}
        <DrawerItem
          title="Ana Menu"
          onPress={() => props.navigation.navigate('Dashboard')}
          accessoryLeft={HomeIcon}
          style={{ backgroundColor: '#EDF1F7', marginBottom: 10 }}
          titleStyle={{ color: '#3366FF', fontWeight: 'bold' }}
        />

        {/* Lojistik-Satış Section */}
        <Text category='s1' style={{ marginBottom: 10, color: '#3366FF', fontWeight: 'bold' }}>Lojistik-Satış</Text>
        <DrawerGroup title="Fatura" accessoryLeft={InvoiceIcon}>
          <DrawerItem title="Fatura Listesi" onPress={() => props.navigation.navigate('Faturalar')} />
          <DrawerItem title="Fatura Oluştur" />
        </DrawerGroup>
        <DrawerGroup title="Stok" accessoryLeft={ProductIcon}>
          <DrawerItem title="Stok Listesi" onPress={() => props.navigation.navigate('Products')} />
          <DrawerItem title="Stok Hareketler" onPress={() => props.navigation.navigate('StokHareketler')} />
          <DrawerItem title="Stok Oluştur" />
        </DrawerGroup>

        {/* Finans Section */}
        <Text category='s1' style={{ marginBottom: 10, color: '#3366FF', fontWeight: 'bold' }}>Finans</Text>
        <DrawerGroup title="Musteriler" accessoryLeft={CustomerIcon}>
          <DrawerItem title="Musteri Listesi" onPress={() => props.navigation.navigate('Customers')} />
          <DrawerItem title="Musteri Oluştur" />
        </DrawerGroup>
        <DrawerGroup title="Muhasebe" accessoryLeft={AccountingIcon}>
          <DrawerItem title="Kasa Listesi" onPress={() => props.navigation.navigate('Dashboard')} />
          <DrawerItem title="Kasa Hareketleri" onPress={() => props.navigation.navigate('Dashboard')} />
        </DrawerGroup>

        {/* Yönetim Section */}
        <Text category='s1' style={{ marginBottom: 10, color: '#3366FF', fontWeight: 'bold' }}>Yönetim</Text>
        <DrawerGroup title="Kullanıcı" accessoryLeft={UserIcon}>
          <DrawerItem 
            title="Kullanıcı Listesi" 
            onPress={() => props.navigation.navigate('UserList')} // Navigation to User List Screen
          />
          {/* <DrawerItem 
            title="Kullanıcı Yetkileri" 
            onPress={() => props.navigation.navigate('UserPermissionsScreen')} // Assuming you have this screen
          /> */}
        </DrawerGroup>
        <DrawerItem title="Ayarlar" accessoryLeft={SettingsIcon} onPress={() => props.navigation.navigate('Settings')} />
      </Layout>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
