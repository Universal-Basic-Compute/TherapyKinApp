/**
 * TherapyKin color palette based on the styleguide.
 * Colors are defined for both light and dark mode.
 */

// Primary Colors
const tealColor = '#00c5bc';
const lightGreenColor = '#8ced7d';
const purpleColor = '#a571ff';

// Accent Colors
const yellowColor = '#ffde45';
const orangeColor = '#ff9d76';

// Light Mode Colors
const lightBackground = '#f8fafc';
const lightBackgroundAlt = '#f1f5f9';
const lightForeground = '#1e293b';
const lightBorder = 'rgba(0, 0, 0, 0.08)';
const lightCardBg = '#ffffff';

// Dark Mode Colors
const darkBackground = '#0a1929';
const darkBackgroundAlt = '#132f4c';
const darkForeground = '#f1f5f9';
const darkBorder = 'rgba(255, 255, 255, 0.1)';
const darkCardBg = '#132f4c';

export const Colors = {
  light: {
    text: lightForeground,
    background: lightBackground,
    backgroundAlt: lightBackgroundAlt,
    tint: tealColor,
    accent: purpleColor,
    highlight: yellowColor,
    secondary: lightGreenColor,
    tertiary: orangeColor,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tealColor,
    border: lightBorder,
    card: lightCardBg,
  },
  dark: {
    text: darkForeground,
    background: darkBackground,
    backgroundAlt: darkBackgroundAlt,
    tint: tealColor,
    accent: purpleColor,
    highlight: yellowColor,
    secondary: lightGreenColor,
    tertiary: orangeColor,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tealColor,
    border: darkBorder,
    card: darkCardBg,
  },
};
