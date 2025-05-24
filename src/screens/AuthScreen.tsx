import React, { useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { LoginForm } from '../components/auth/LoginForm';
import { SignUpForm } from '../components/auth/SignUpForm';

export const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 justify-center">
        {isLogin ? (
          <LoginForm onSignUpPress={() => setIsLogin(false)} />
        ) : (
          <SignUpForm onLoginPress={() => setIsLogin(true)} />
        )}
      </View>
    </SafeAreaView>
  );
}; 