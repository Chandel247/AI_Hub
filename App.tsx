import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { AuthScreen } from './src/screens/AuthScreen';
import { useSelector } from 'react-redux';
import { RootState } from './src/store';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthScreen} />
      ) : (
        // Add other screens here when user is authenticated
        <Stack.Screen name="Home" component={AuthScreen} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
} 