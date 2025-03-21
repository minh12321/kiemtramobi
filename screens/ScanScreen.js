import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ScanScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ScanScreen(1)(1).png')} style={styles.productImage} />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="rgb(101, 154, 206)" />
      </TouchableOpacity>

      <View style={styles.infoBox}>
        <Image source={require('../assets/bottle.png')} style={styles.thumbnail} />
        <View>
        <Text style={styles.productName11}>Lauren’s </Text>
        <Text style={styles.productName}>Lauren’s Orange Juice                                </Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(235, 223, 207)', alignItems: 'center', justifyContent: 'center' },
  backIcon: { width: 30, height: 30 },
  productImage: { width: '430', height: 900, resizeMode: 'contain', top:60 , },
  infoBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, borderRadius: 10, top:-138 ,width:360,height:100,},
  thumbnail: { width: 40, height: 40, borderRadius: 5, marginRight: 10 },
  productName11: { fontSize: 12,color:'rgb(192,192,192)', flex: 1,marginBottom:-9,marginTop:10 },
  productName: { fontSize: 16, fontWeight: 'bold', flex: 1,marginTop:-9 },
  addButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 ,width:37,},
  addButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold',textAlign:'center', },
  scan:{marginTop: -700 ,},
  scan2:{marginTop: -200 ,width:300,},
  backButton: { position: "absolute", top: 50, left: 20 },
});

export default ScanScreen;
