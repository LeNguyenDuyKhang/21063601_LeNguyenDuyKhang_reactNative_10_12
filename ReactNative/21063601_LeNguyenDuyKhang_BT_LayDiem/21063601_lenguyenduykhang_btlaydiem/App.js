import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import WelcomeScreen from './WelcomeScreen';
import CatalogScreen from './CatalogScreen';
import DetailScreen from './DetailScreen';
import AddProductScreen from './AddProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Catalog" 
            component={CatalogScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen}
            options={({ route }) => ({ title: route.params.bike.name })}
          />
          <Stack.Screen 
            name="AddProduct" 
            component={AddProductScreen}
            options={{ title: 'Add New Product' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}