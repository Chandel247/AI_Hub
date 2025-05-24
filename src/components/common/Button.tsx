import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  loading = false,
  disabled = false,
  className = '',
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-secondary';
      case 'outline':
        return 'bg-transparent border-2 border-primary';
      default:
        return 'bg-primary';
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${getVariantClasses()} rounded-lg px-6 py-3 ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
    >
      <View className="flex-row items-center justify-center">
        {loading && (
          <ActivityIndicator
            color={variant === 'outline' ? '#007AFF' : '#FFFFFF'}
            className="mr-2"
          />
        )}
        <Text
          className={`text-center font-semibold ${
            variant === 'outline' ? 'text-primary' : 'text-white'
          }`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}; 