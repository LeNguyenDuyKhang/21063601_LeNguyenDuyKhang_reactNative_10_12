import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={{ uri: 'https://haybike.com/assets/media/xe-up-web.jpg' }}
          style={styles.welcomeImage}
        />
        <Text style={styles.title}>POWER BIKE SHOP</Text>
        <Text style={styles.subtitle}>A premium online store for{'\n'}sporters and their stylish choice</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Catalog')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;