import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useAuth } from '@/context/AuthContext';

export default function ProfileScreen() {
  const { logout, user } = useAuth();
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Profile</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.profileSection}>
        <Image 
          source={require('@/assets/images/icon.png')} 
          style={styles.profileImage} 
        />
        <ThemedText type="subtitle">{user?.firstName || 'Guest User'}</ThemedText>
        <ThemedText>{user?.email || 'Free Plan • 3 sessions remaining'}</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.menuSection}>
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="person.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Account Settings</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="chart.bar.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Progress Tracking</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="creditcard.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Subscription</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="bell.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Notifications</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="lock.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Privacy Settings</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.supportSection}>
        <ThemedText type="subtitle">Support</ThemedText>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="questionmark.circle.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Help Center</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="envelope.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Contact Support</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <IconSymbol name="doc.text.fill" size={24} color="#00c5bc" />
          <ThemedText style={styles.menuText}>Terms & Privacy Policy</ThemedText>
          <IconSymbol name="chevron.right" size={20} color="#888" />
        </TouchableOpacity>
      </ThemedView>
      
      <TouchableOpacity style={styles.signOutButton} onPress={logout}>
        <ThemedText style={styles.signOutText}>Sign Out</ThemedText>
      </TouchableOpacity>
      
      <ThemedView style={styles.versionInfo}>
        <ThemedText style={styles.versionText}>TherapyKin Mobile v1.0.0</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  menuSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  supportSection: {
    padding: 16,
  },
  signOutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    color: '#FF3B30',
    fontWeight: 'bold',
  },
  versionInfo: {
    padding: 16,
    alignItems: 'center',
  },
  versionText: {
    color: '#888',
  },
});
