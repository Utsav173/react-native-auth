import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext,  useState} from 'react';
import { Alert } from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({children, navigation}) => {

    const BASE_URL = "http://exp://192.168.0.105:19000"
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

  const register = async(name, email, password) => {
    setIsLoading(true);
        let userInfo = {name, email, password};
        setUserInfo(userInfo);
        console.log(userInfo);
        await AsyncStorage.setItem(
          name, email, password
          );
        if(userInfo){
          Alert.alert("Success", "Register succesful please login")
        }
        setIsLoading(false);
        console.log(userInfo);
  };


  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        register,
        setUserInfo,
        setIsLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};