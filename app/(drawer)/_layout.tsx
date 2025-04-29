import { Drawer } from 'expo-router/drawer';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        headerTintColor: Colors[colorScheme ?? 'light'].tint,
        drawerActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
          drawerIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
        }}
      />
      <Drawer.Screen
        name="chat"
        options={{
          title: 'Chat',
          drawerIcon: ({ color }) => <IconSymbol size={24} name="bubble.left.fill" color={color} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Profile',
          drawerIcon: ({ color }) => <IconSymbol size={24} name="person.fill" color={color} />,
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: 'Explore',
          drawerIcon: ({ color }) => <IconSymbol size={24} name="paperplane.fill" color={color} />,
        }}
      />
    </Drawer>
  );
}
