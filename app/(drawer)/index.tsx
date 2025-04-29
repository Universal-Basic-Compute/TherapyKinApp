import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to TherapyKin</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Your Therapeutic Companion</ThemedText>
        <ThemedText>
          TherapyKin provides personalized mental health support whenever and wherever you need it.
        </ThemedText>
      </ThemedView>
      
      <TouchableOpacity 
        style={styles.chatButton}
        onPress={() => router.push('/chat')}>
        <IconSymbol size={24} name="bubble.left.fill" color="#ffffff" />
        <ThemedText style={styles.chatButtonText}>Start a Session</ThemedText>
      </TouchableOpacity>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Personalized Support</ThemedText>
        <ThemedText>
          • Builds a genuine relationship with you over time{'\n'}
          • Remembers your history, preferences, and progress{'\n'}
          • Adapts therapeutic approaches based on what works for you
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Multiple Communication Options</ThemedText>
        <ThemedText>
          • Text when you prefer typing and reflecting{'\n'}
          • Voice when speaking feels more natural{'\n'}
          • Seamlessly switch between both during sessions
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Privacy-First Design</ThemedText>
        <ThemedText>
          Your privacy is our priority. TherapyKin features military-grade encryption and complete data control.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  chatButton: {
    backgroundColor: '#00c5bc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chatButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  }
});
