import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PaymentScreen = ({ navigation }) => {
  const [selectedPayment, setSelectedPayment] = useState("credit");

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color="rgb(39, 200, 41)" />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.header}>
        Checkout <FontAwesome name="credit-card" size={20} />
      </Text>
      <Text style={styles.price}>₹ 1,527</Text>
      <Text style={styles.taxText}>Including GST (18%)</Text>

      {/* Chọn phương thức thanh toán */}
      <View style={styles.paymentOptions}>
        <TouchableOpacity
          style={[
            styles.paymentButton,
            selectedPayment === "credit" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setSelectedPayment("credit")}
        >
          <Text
            style={[
              styles.paymentText,
              selectedPayment === "credit" ? styles.activeText : styles.inactiveText,
            ]}
          >
            💳 Credit card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.paymentButton,
            selectedPayment === "apple" ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => setSelectedPayment("apple")}
        >
          <Text
            style={[
              styles.paymentText,
              selectedPayment === "apple" ? styles.activeText : styles.inactiveText,
            ]}
          >
            <Ionicons name="logo-apple" size={25} /> Apple Pay
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nhập thông tin thẻ */}
      <Text style={styles.label}>Card number</Text>
      <View style={styles.cardNumberInput}>
        <TextInput style={styles.input} placeholder="5261 4141 0151 8472" keyboardType="numeric" />
        <MaterialCommunityIcons name="credit-card-outline" size={24} color="gray" style={styles.cardIcon} />
        <FontAwesome name="cc-mastercard" size={28} color="orange" />
      </View>

      <Text style={styles.label}>Cardholder name</Text>
      <TextInput style={styles.inputBox} placeholder="Christie Doe" />

      <View style={styles.row}>
        <View style={styles.flex1}>
          <Text style={styles.label}>Expiry date</Text>
          <TextInput style={styles.inputBox} placeholder="06 / 2024" textAlign="center" />
        </View>
        <View style={styles.flex1}>
          <Text style={styles.label}>CVV / CVC</Text>
          <View style={styles.cardNumberInput}>
            <TextInput style={styles.input} placeholder="915" secureTextEntry />
            <MaterialIcons name="help-outline" size={20} color="gray" />
          </View>
        </View>
      </View>

      <Text style={styles.infoText}>
        We will send you an order details to your email after the successful payment
      </Text>

      {/* Nút Thanh Toán */}
      <TouchableOpacity onPress={() => navigation.navigate("Success")}>
        <LinearGradient colors={["#4caf50", "#2e7d32"]} style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

// CSS Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 24, paddingTop: 40 },
  backButton: { marginBottom: 16 },
  header: { fontSize: 24, fontWeight: "bold", flexDirection: "row", alignItems: "center" },
  price: { fontSize: 28, fontWeight: "600", color: "#2e7d32", marginTop: 8 },
  taxText: { fontSize: 14, color: "#6b7280" },
  paymentOptions: { flexDirection: "row", backgroundColor: "#f3f4f6", borderRadius: 16, marginTop: 20, padding: 8 },
  paymentButton: { flex: 1, borderRadius: 10, paddingVertical: 12, alignItems: "center" },
  activeButton: { backgroundColor: "#4caf50" },
  inactiveButton: { backgroundColor: "#d1d5db" },
  paymentText: { fontWeight: "bold", fontSize: 18 },
  activeText: { color: "#fff" },
  inactiveText: { color: "#4b5563" },
  label: { color: "#4b5563", marginTop: 24, marginBottom: 4 },
  cardNumberInput: { flexDirection: "row", alignItems: "center", backgroundColor: "#f3f4f6", padding: 16, borderRadius: 10 },
  input: { flex: 1, fontSize: 18 },
  inputBox: { backgroundColor: "#f3f4f6", padding: 16, borderRadius: 10, fontSize: 18 },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
  flex1: { flex: 1, marginHorizontal: 4 },
  infoText: { color: "#6b7280", textAlign: "center", marginTop: 16, fontSize: 14 },
  payButton: { borderRadius: 10, paddingVertical: 16, marginTop: 24 },
  payButtonText: { color: "#fff", textAlign: "center", fontWeight: "bold", fontSize: 18 },
});

export default PaymentScreen;
