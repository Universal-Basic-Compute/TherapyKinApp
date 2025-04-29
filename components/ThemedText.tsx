import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'heading2' | 'heading3' | 'heading4' | 'defaultSemiBold' | 'small' | 'extraSmall' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'heading2' ? styles.heading2 : undefined,
        type === 'heading3' ? styles.heading3 : undefined,
        type === 'heading4' ? styles.heading4 : undefined,
        type === 'small' ? styles.small : undefined,
        type === 'extraSmall' ? styles.extraSmall : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16, // 1rem as per styleguide
    lineHeight: 24,
    fontWeight: '400', // Regular as per styleguide
  },
  defaultSemiBold: {
    fontSize: 16, // 1rem as per styleguide
    lineHeight: 24,
    fontWeight: '600', // Semibold as per styleguide
  },
  title: {
    fontSize: 36, // 2.25rem (H1) as per styleguide
    fontWeight: '700', // Bold as per styleguide
    lineHeight: 44,
  },
  heading2: {
    fontSize: 28, // 1.75rem (H2) as per styleguide
    fontWeight: '700', // Bold as per styleguide
    lineHeight: 36,
  },
  heading3: {
    fontSize: 24, // 1.5rem (H3) as per styleguide
    fontWeight: '600', // Semibold as per styleguide
    lineHeight: 32,
  },
  heading4: {
    fontSize: 20, // 1.25rem (H4) as per styleguide
    fontWeight: '600', // Semibold as per styleguide
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 20, // 1.25rem (H4) as per styleguide
    fontWeight: '600', // Semibold as per styleguide
    lineHeight: 28,
  },
  small: {
    fontSize: 14, // 0.875rem as per styleguide
    lineHeight: 20,
    fontWeight: '400', // Regular as per styleguide
  },
  extraSmall: {
    fontSize: 12, // 0.75rem as per styleguide
    lineHeight: 16,
    fontWeight: '400', // Regular as per styleguide
  },
  link: {
    fontSize: 16, // 1rem as per styleguide
    lineHeight: 24,
    fontWeight: '500', // Medium as per styleguide
    color: '#00c5bc', // Teal from styleguide
    textDecorationLine: 'underline',
  },
});
