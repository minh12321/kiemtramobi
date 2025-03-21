import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home');
            navigation.replace('Main');
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/MaskGroup.png')} style={styles.image} />
            <Text style={styles.title}>Scan, Pay & Enjoy!</Text>
            <Text style={styles.subtitle}>Scan products, pay instantly & enjoy a hassle-free shopping experience.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 229, 225)',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: 'gray',
        paddingHorizontal: 20,
    },
});

export default SplashScreen;
