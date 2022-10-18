import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginscreen from '../screens/Loginscreen';
import Registerscreen from '../screens/Registerscreen';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
          <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="Login"
              component={Loginscreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Registerscreen}
              options={{headerShown: false}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
