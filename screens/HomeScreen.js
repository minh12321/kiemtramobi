import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋<View><Image source={require('../assets/MaskGroup.png')} style={styles.image} /></View></Text>
        <Text style={styles.name}>Cao Minh</Text>
        {/* <Image source={require('../assets/icon/profile.png')} style={styles.profileImage} /> */}
        
        
      </View>
      
      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Image source={require('../assets/icon/scan.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/icon/warning.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/icon/success.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image source={require('../assets/icon/lich.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Explore more                                          <Ionicons name="arrow-forward-outline" size={25}  /></Text>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'space-between',
    marginBottom: 40,
    marginTop:30,
  },
  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 40
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height:150,
    backgroundColor: '#F5F5F5',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#888',
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  image:{
    right:0,
    width:50,
    height:50,
    borderRadius:25,
    marginLeft:240,
  }
});

export default HomeScreen;