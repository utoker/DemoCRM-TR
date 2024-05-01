import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Input, Button, Layout, Text } from '@ui-kitten/components';
import api from '../api/api';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123');
  const [loading, setLoading] = useState(false); 

  const handleLogin = async () => {
    setLoading(true);  // Start loading
    try {
      console.log("Logging in with:", username, password);

      const response = await api.get('login', {
        params: {
          userName: username,
          password: password
        }
      });

      const data = response.data;

      if (data.success) {
        console.log("Login successful:", data);
        navigation.navigate('Dashboard');  // Navigate on success
      } else {
        console.error("Login failed: Invalid username or password");
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to connect to the server");
    }
    setLoading(false);  // Stop loading
  };

  return (
    <Layout style={styles.container}>
      <Text category='h1'>Login</Text>
      <Input
        value={username}
        label="Username"
        size='large'
        placeholder="Enter your username"
        onChangeText={setUsername}
        style={styles.input}
      />
      <Input
        value={password}
        label="Password"
        size='large'
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.input}
      />
<Button
  size='large'
  onPress={handleLogin}
  disabled={loading}  // Disable button when loading
  accessoryLeft={loading ? () => <ActivityIndicator color="#FFFFFF" /> : null}
>
  {loading ? 'LOADING...' : 'LOGIN'}
</Button>

    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 16,
  },
});

export default LoginScreen;
