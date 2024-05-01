import React, { useState, useEffect } from 'react';
import { ApplicationProvider, DrawerGroup, DrawerItem, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import OrdersScreen from './screens/OrdersScreen';
import InvoicesScreen from './screens/InvoicesScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomersScreen from './screens/CustomersScreen';
import ProductsScreen from './screens/ProductsScreen';
import CustomDrawer from './components/CustomDrawer';
import UserListScreen from './screens/UserListScreen';
import { SafeAreaView } from 'react-native';
import StokHareketler from './screens/StokHareketler';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Correct placement of useState

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  useEffect(() => {
    // Simulated login check
    setIsLoggedIn(true); // For demonstration, assuming logged in after app starts
  }, []);

  function StackNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Faturalar" component={InvoicesScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Customers" component={CustomersScreen} />
        <Drawer.Screen name="Products" component={ProductsScreen} />
        <Drawer.Screen name="UserList" component={UserListScreen} />
        <Drawer.Screen name="StokHareketler" component={StokHareketler} />

      </Drawer.Navigator>
    </NavigationContainer>



        {/* <NavigationContainer>
          {isLoggedIn ? <DrawerNavigator /> : <StackNavigator />}
        </NavigationContainer> */}
      </ApplicationProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
