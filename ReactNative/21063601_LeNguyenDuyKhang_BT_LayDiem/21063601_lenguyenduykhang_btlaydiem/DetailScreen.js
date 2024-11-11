import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from './store';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const DetailScreen = ({ route }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.bikes.favorites);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.detailImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.gradient}
      >
        <Text style={styles.detailTitle}>{bike.name}</Text>
      </LinearGradient>
      <View style={styles.detailContent}>
        <Text style={styles.detailPrice}>${bike.price.toFixed(2)}</Text>
        <Text style={styles.detailDiscount}>15% OFF | ${(bike.price * 0.85).toFixed(2)}</Text>
        
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{bike.description}</Text>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => alert('Added to cart!')}
        >
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.favoriteDetailButton}
          onPress={() => dispatch(toggleFavorite(bike.id))}
        >
          <Ionicons
            name={favorites.includes(bike.id) ? 'heart' : 'heart-outline'}
            size={28}
            color={favorites.includes(bike.id) ? '#ff4444' : '#000'}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;