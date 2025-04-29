import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/AuthContext';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register, isLoading } = useAuth();
  const colorScheme = useColorScheme() ?? 'light';

  const handleRegister = async () => {
    if (!email || !firstName || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setError('');
    const success = await register(email, firstName, password);
    
    if (!success) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image 
          source={require('@/assets/images/icon.png')} 
          style={styles.logo} 
        />
        
        <ThemedText type="title" style={styles.title}>TherapyKin</ThemedText>
        <ThemedText style={styles.subtitle}>Your Therapeutic Companion</ThemedText>
        
        <ThemedView style={styles.formContainer}>
          <ThemedText type="subtitle" style={styles.formTitle}>Create Account</ThemedText>
          
          {error ? (
            <ThemedView style={styles.errorContainer}>
              <ThemedText style={styles.errorText}>{error}</ThemedText>
            </ThemedView>
          ) : null}
          
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: Colors[colorScheme].backgroundAlt,
                borderColor: Colors[colorScheme].border,
                color: Colors[colorScheme].text
              }
            ]}
            placeholder="Email"
            placeholderTextColor={Colors[colorScheme].icon}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: Colors[colorScheme].backgroundAlt,
                borderColor: Colors[colorScheme].border,
                color: Colors[colorScheme].text
              }
            ]}
            placeholder="First Name"
            placeholderTextColor={Colors[colorScheme].icon}
            value={firstName}
            onChangeText={setFirstName}
          />
          
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: Colors[colorScheme].backgroundAlt,
                borderColor: Colors[colorScheme].border,
                color: Colors[colorScheme].text
              }
            ]}
            placeholder="Password"
            placeholderTextColor={Colors[colorScheme].icon}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TextInput
            style={[
              styles.input,
              { 
                backgroundColor: Colors[colorScheme].backgroundAlt,
                borderColor: Colors[colorScheme].border,
                color: Colors[colorScheme].text
              }
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={Colors[colorScheme].icon}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: Colors[colorScheme].tint }]}
            onPress={handleRegister}
            disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <ThemedText style={styles.buttonText}>Register</ThemedText>
            )}
          </TouchableOpacity>
          
          <ThemedView style={styles.loginContainer}>
            <ThemedText>Already have an account? </ThemedText>
            <TouchableOpacity onPress={() => router.push('/auth/login')}>
              <ThemedText type="link">Login</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 40,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
    borderWidth: 1,
  },
  formTitle: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 9999,
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  errorContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
  },
  errorText: {
    color: '#FF3B30',
    textAlign: 'center',
  },
});
