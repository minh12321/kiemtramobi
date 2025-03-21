import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ScanScreen from './screens/ScanScreen';
import CartScreen from './screens/CartScreen';
import PaymentScreen from './screens/PaymentScreen';
import SuccessScreen from './screens/SuccessScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 🔹 Tab chứa các màn hình có thể hiển thị
const BottomTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false , tabBarStyle: styles.tabBar}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,title: "Home",}}/>
        <Tab.Screen name="Bell" component={CartScreen} options={{tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" size={size} color={color} />,title: "notifications",}}/>
        <Tab.Screen name="scan" component={ScanScreen} options={{tabBarIcon: ({ color, size }) => <Ionicons name="scan-outline" size={size} color={color} />,title: "scan",}}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon: ({ color, size }) => <Ionicons name="cart-outline" size={size} color={color} />,title: "cart",}}/>
        <Tab.Screen name="History" component={PaymentScreen} options={{tabBarIcon: ({ color, size }) => <Ionicons name="time-outline" size={size} color={color} />,title: "History",}}/>
      </Tab.Navigator>
    );
};

const App1 = () => {
    return (
            <Stack.Navigator initialRouteName="1" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="1" component={SplashScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Scan" component={ScanScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
                <Stack.Screen name="Payment" component={PaymentScreen} />
                <Stack.Screen name="Success" component={SuccessScreen} />

                <Stack.Screen name="Main" component={BottomTabNavigator} />
            </Stack.Navigator>
    );
};


export default function App() {
  return (
      <NavigationContainer>
          <App1 />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,
      height: 90,
      backgroundColor: "#fff",
      borderRadius: 30, 
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      elevation: 5,
      marginBottom:-40,
  },
});