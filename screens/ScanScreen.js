import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScanScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/icon/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <Image source={require('../assets/bottle.png')} style={styles.productImage} />
      <Image source={require('../assets/khung1.png')} style={styles.scan} />
      <Image source={require('../assets/khung2.png')} style={styles.scan2} />

      <View style={styles.infoBox}>
        <Image source={require('../assets/bottle.png')} style={styles.thumbnail} />
        <Text style={styles.productName}>Lauren’s Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', alignItems: 'center', justifyContent: 'center' },
  backButton: { position: 'absolute', top: 0, left: 20, padding: 10 ,marginBottom:-1000,marginTop: 0 ,},
  backIcon: { width: 30, height: 30 },
  productImage: { width: '100%', height: 900, resizeMode: 'contain', marginTop: -50 , },
  infoBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 10, marginTop: 200 ,width:360,},
  thumbnail: { width: 40, height: 40, borderRadius: 5, marginRight: 10 },
  productName: { fontSize: 16, fontWeight: 'bold', flex: 1 },
  addButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 ,width:37,},
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold',textAlign:'center', },
  scan:{marginTop: -700 ,},
  scan2:{marginTop: -200 ,width:300,},
});

export default ScanScreen;
