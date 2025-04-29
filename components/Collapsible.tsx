import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type CollapsibleProps = PropsWithChildren & { 
  title: string;
  style?: ViewStyle;
  variant?: 'default' | 'highlight' | 'primary' | 'accent';
};

export function Collapsible({ children, title, style, variant = 'default' }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  
  // Determine which card variant to use
  let cardVariant: 'card' | 'cardHighlight' | 'cardPrimary' | 'cardAccent' = 'card';
  if (variant === 'highlight') cardVariant = 'cardHighlight';
  if (variant === 'primary') cardVariant = 'cardPrimary';
  if (variant === 'accent') cardVariant = 'cardAccent';

  return (
    <ThemedView variant={cardVariant} style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={[styles.icon, isOpen && styles.iconOpen]}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 12,
    marginLeft: 24,
    backgroundColor: 'transparent',
  },
  icon: {
    transform: [{ rotate: '0deg' }],
  },
  iconOpen: {
    transform: [{ rotate: '90deg' }],
  }
});
