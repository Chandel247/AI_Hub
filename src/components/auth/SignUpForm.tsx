import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { setUser, setError, setLoading } from '../../store/slices/authSlice';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

interface SignUpFormProps {
  onLoginPress: () => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onLoginPress }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');
  
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setFormError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    try {
      dispatch(setLoading(true));
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
        Create Account
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

      <Input
        label="Confirm Password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        error={formError}
      />

      <Button
        title="Sign Up"
        onPress={handleSignUp}
        className="mt-4"
      />

      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
        </Text>
        <Text
          className="text-primary font-semibold"
          onPress={onLoginPress}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}; 