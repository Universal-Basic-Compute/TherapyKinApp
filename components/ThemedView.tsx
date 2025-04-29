import { View, type ViewProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'default' | 'card' | 'cardHighlight' | 'cardPrimary' | 'cardAccent';
};

export function ThemedView({ style, lightColor, darkColor, variant = 'default', ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, variant === 'default' ? 'background' : 'card');
  const borderColor = useThemeColor({}, 'border');
  const primaryColor = useThemeColor({}, 'tint');
  const accentColor = useThemeColor({}, 'accent');
  const highlightColor = useThemeColor({}, 'highlight');

  let variantStyle = {};
  
  if (variant === 'card') {
    variantStyle = styles.card;
  } else if (variant === 'cardHighlight') {
    variantStyle = {...styles.card, ...styles.cardHighlight, borderTopColor: highlightColor};
  } else if (variant === 'cardPrimary') {
    variantStyle = {...styles.card, ...styles.cardHighlight, borderTopColor: primaryColor};
  } else if (variant === 'cardAccent') {
    variantStyle = {...styles.card, ...styles.cardHighlight, borderTopColor: accentColor};
  }

  return (
    <View 
      style={[
        { backgroundColor }, 
        variant !== 'default' && { borderColor },
        variantStyle,
        style
      ]} 
      {...otherProps} 
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16, // 1rem as per styleguide
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 3,
    borderWidth: 1,
  },
  cardHighlight: {
    borderTopWidth: 4,
  }
});
