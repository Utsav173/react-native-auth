
import React, {useContext} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const HomeScreen = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);



  return (
    <View style={styles.container}>
      
        <Image source={require('../upload/hh.gif')}  
        style={{width: 250, height:150, resizeMode:"contain", marginBottom:25 }}/>
      
      <Text style={styles.welcome}>Welcome {userInfo.name}</Text>
      <Button title="Logout" color="red" onPress={()=>{
        navigation.navigate('Login')
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
