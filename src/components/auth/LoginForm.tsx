import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { setUser, setError, setLoading } from '../../store/slices/authSlice';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

interface LoginFormProps {
  onSignUpPress: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSignUpPress }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      setFormError('Please fill in all fields');
      return;
    }

    try {
      dispatch(setLoading(true));
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setUser(userCredential.user));
      dispatch(setError(null));
    } catch (error: any) {
      dispatch(setError(error.message));
      setFormError(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View className="w-full px-4">
      <Text className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Welcome Back
      </Text>
      
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        error={formError}
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={formError}
      />

      <Button
        title="Sign In"
        onPress={handleLogin}
        className="mt-4"
      />

      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
        </Text>
        <Text
          className="text-primary font-semibold"
          onPress={onSignUpPress}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}; 