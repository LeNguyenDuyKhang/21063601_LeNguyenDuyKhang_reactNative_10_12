import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from './store';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const BikeCard = ({ bike, onPress }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.bikes.favorites);

  return (
    <TouchableOpacity style={styles.bikeCard} onPress={onPress}>
      <Image source={{ uri: bike.image }} style={styles.bikeImage} />
      <View style={styles.bikeInfo}>
        <Text style={styles.bikeName} numberOfLines={1}>{bike.name}</Text>
        <Text style={styles.bikePrice}>${bike.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => dispatch(toggleFavorite(bike.id))}
      >
        <Ionicons
          name={favorites.includes(bike.id) ? 'heart' : 'heart-outline'}
          size={24}
          color={favorites.includes(bike.id) ? '#ff4444' : '#000'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default BikeCard;