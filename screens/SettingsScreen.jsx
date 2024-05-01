import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text, Toggle, Divider, Button, Input, Icon } from '@ui-kitten/components';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [email, setEmail] = useState('');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);

  return (
    <ScrollView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.header}>Settings</Text>

        {/* Toggle for Dark Mode */}
        <Layout style={styles.setting}>
          <Text category="s1">Dark Mode</Text>
          <Toggle checked={darkMode} onChange={toggleDarkMode} />
        </Layout>
        <Divider style={styles.divider} />

        {/* Toggle for Notifications */}
        <Layout style={styles.setting}>
          <Text category="s1">Notifications</Text>
          <Toggle checked={notificationsEnabled} onChange={toggleNotifications} />
        </Layout>
        <Divider style={styles.divider} />

        {/* Email Input */}
        <Layout style={styles.setting}>
          <Text category="s1">Email</Text>
          <Input
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </Layout>
        <Divider style={styles.divider} />

        {/* Save Button */}
        <Button style={styles.button}>Save Changes</Button>
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
    padding: 20,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  divider: {
    marginVertical: 12,
  },
  button: {
    marginTop: 20,
  }
});

export default SettingsScreen;
