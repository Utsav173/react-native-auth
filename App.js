import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthProvider } from './app/context/AuthContext';
import { StatusBar } from 'expo-status-bar';
import Navigation from './app/components/Navigation';

const Stack = createStackNavigator();

const App = () => {
    return (
        <AuthProvider>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </AuthProvider>
    )
}

export default App;