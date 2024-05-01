import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Layout, Text, List, Card, Divider, Input } from '@ui-kitten/components';
import useDebounce from '../hooks/useDebounce';

const exampleData = [
    {
      "STOK_KODU": "AT0001",
      "STOK_ADI": "PERCIN CEKIC C.TARAF YUV",
      "GIRIS": "0,00000000",
      "CIKIS": "2,00000000",
      "TOPLAM": "-2,00000000",
      "SATIS_FIAT1": "7,50000000"
    },
    {
      "STOK_KODU": "AT00010",
      "STOK_ADI": "TIEGO POTA NO:1/2",
      "GIRIS": "5,00000000",
      "CIKIS": "0,00000000",
      "TOPLAM": "5,00000000",
      "SATIS_FIAT1": "15,00000000"
    },
    {
      "STOK_KODU": "AT00010003",
      "STOK_ADI": "SAF SU 5 LT",
      "GIRIS": "200,00000000",
      "CIKIS": "232,40000000",
      "TOPLAM": "-32,40000000",
      "SATIS_FIAT1": "2,00000000"
    },
    {
      "STOK_KODU": "AT0001002",
      "STOK_ADI": "PERCIN CEKIC KARE TAHTA SAP",
      "GIRIS": "0,00000000",
      "CIKIS": "1,00000000",
      "TOPLAM": "-1,00000000",
      "SATIS_FIAT1": "5,50000000"
    },
    {
      "STOK_KODU": "AT0001008",
      "STOK_ADI": "PERCIN CEKICI PARLAK",
      "GIRIS": "0,00000000",
      "CIKIS": "7,00000000",
      "TOPLAM": "-7,00000000",
      "SATIS_FIAT1": "5,00000000"
    },
    {
      "STOK_KODU": "AT0001022",
      "STOK_ADI": "PLASTIK AGIZLI CEKIC KUCUK EA-1101",
      "GIRIS": "0,00000000",
      "CIKIS": "1,00000000",
      "TOPLAM": "-1,00000000",
      "SATIS_FIAT1": "6,00000000"
    },
    {
      "STOK_KODU": "AT0001024",
      "STOK_ADI": "PLASTIK AGIZLI CEKIC ORTA EA-1102",
      "GIRIS": "0,00000000",
      "CIKIS": "3,00000000",
      "TOPLAM": "-3,00000000",
      "SATIS_FIAT1": "8,00000000"
    },
    {
      "STOK_KODU": "AT00011",
      "STOK_ADI": "TIEGO POTA NO:1",
      "GIRIS": "5,00000000",
      "CIKIS": "1,00000000",
      "TOPLAM": "4,00000000",
      "SATIS_FIAT1": "17,00000000"
    },
    {
      "STOK_KODU": "AT000110",
      "STOK_ADI": "PERCIN CEKICI 1135.8",
      "GIRIS": "0,00000000",
      "CIKIS": "1,00000000",
      "TOPLAM": "-1,00000000",
      "SATIS_FIAT1": "35,00000000"
    },
    {
      "STOK_KODU": "AT00012",
      "STOK_ADI": "TIEGO POTA NO:2",
      "GIRIS": "5,00000000",
      "CIKIS": "2,00000000",
      "TOPLAM": "3,00000000",
      "SATIS_FIAT1": "20,00000000"
    },
    {
      "STOK_KODU": "AT00014",
      "STOK_ADI": "TIEGO POTA NO:4",
      "GIRIS": "5,00000000",
      "CIKIS": "5,00000000",
      "TOPLAM": "0,00000000",
      "SATIS_FIAT1": "26,00000000"
    }
  ]
  

const InventoryScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  const filteredData = exampleData.filter(item =>
    item.STOK_ADI.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
    item.STOK_KODU.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Text category='s1' style={styles.title}>{item.STOK_ADI}</Text>
      <Text category='label' style={styles.codeLabel}>Kodu: {item.STOK_KODU}</Text>
      <Divider style={styles.divider} />
      <View style={styles.detailItem}>
        <Text category='p1'>Giriş: {item.GIRIS}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text category='p1'>Çıkış: {item.CIKIS}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text category='p1' style={styles.total}>Toplam: {item.TOPLAM}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text category='p1'>Satış Fiyatı: {item.SATIS_FIAT1}</Text>
      </View>
    </Card>
  );
  

  return (
    <Layout style={styles.container}>
      <Input
        placeholder="İsim veya kod ile ara"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <List
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.STOK_KODU}
        />
      )}
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
      borderRadius: 8,
      backgroundColor: '#f7f9fc',
      elevation: 3,
    },
    title: {
      marginBottom: 4, // Adds a little space below the title
    },
    codeLabel: {
      marginBottom: 4, // Adds a little space below the code
    },
    divider: {
      marginVertical: 8,
    },
    detailItem: {
      marginBottom: 4, // Adds space between each detail item
    },
    total: {
      fontWeight: 'bold',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    searchInput: {
      marginVertical: 10,
      borderRadius: 25,
    },
  });
  
export default InventoryScreen;
