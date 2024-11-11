import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBikes } from './store';
import BikeCard from './BikeCard';
import styles from './styles';

const CatalogScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const dispatch = useDispatch();
  const { bikes, status, error } = useSelector(state => state.bikes);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBikes());
    }
  }, [status, dispatch]);

  const filteredBikes = React.useMemo(() => {
    if (selectedCategory === 'all') return bikes;
    return bikes.filter(bike => bike.category.toLowerCase() === selectedCategory);
  }, [bikes, selectedCategory]);

  if (status === 'loading') {
    return <View style={styles.centered}><ActivityIndicator size="large" color="#ff4444" /></View>;
  }

  if (status === 'failed') {
    return <View style={styles.centered}><Text>Error: {error}</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>The World's Best Bikes</Text>
      
      <View style={styles.categories}>
        {['all', 'road', 'mountain'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonActive]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, selectedCategory === category && styles.categoryTextActive]}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBikes}
        renderItem={({ item }) => (
          <BikeCard
            bike={item}
            onPress={() => navigation.navigate('Detail', { bike: item })}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.bikeList}
      />
    </View>
  );
};

export default CatalogScreen;