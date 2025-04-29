import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="brain.head.profile"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore TherapyKin</ThemedText>
      </ThemedView>
      <ThemedText>Discover how TherapyKin can support your mental health journey.</ThemedText>
      
      <Collapsible title="Evidence-Based Approaches">
        <ThemedText>
          TherapyKin incorporates techniques from established therapeutic modalities:
        </ThemedText>
        <ThemedText>
          • Cognitive Behavioral Therapy (CBT){'\n'}
          • Dialectical Behavior Therapy (DBT){'\n'}
          • Acceptance and Commitment Therapy (ACT){'\n'}
          • Mindfulness practices
        </ThemedText>
        <ThemedText>
          All approaches are backed by research and clinical expertise.
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Flexible Session Formats">
        <ThemedText>
          TherapyKin adapts to your needs with multiple session options:
        </ThemedText>
        <ThemedText>
          • Quick 5-minute check-ins during busy days{'\n'}
          • Deep conversations when you need more support{'\n'}
          • Middle-of-the-night assistance when thoughts feel heaviest
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Progress Tracking">
        <ThemedText>
          Visualize your mental health journey with our tracking tools:
        </ThemedText>
        <ThemedText>
          • Mood tracking over time{'\n'}
          • Pattern recognition{'\n'}
          • Technique effectiveness monitoring{'\n'}
          • Goal setting and achievement tracking
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Subscription Plans">
        <ThemedText>
          Choose the plan that fits your needs:
        </ThemedText>
        <ThemedText>
          • <ThemedText type="defaultSemiBold">Free</ThemedText>: 3 sessions, basic features{'\n'}
          • <ThemedText type="defaultSemiBold">Basic</ThemedText>: $39/month, 8 sessions per month{'\n'}
          • <ThemedText type="defaultSemiBold">Standard</ThemedText>: $69/month, 30 sessions per month{'\n'}
          • <ThemedText type="defaultSemiBold">Premium</ThemedText>: $119/month, unlimited sessions
        </ThemedText>
        <ThemedText>
          Annual plans available with 20% savings.
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Important Note">
        <ThemedText>
          TherapyKin is not a replacement for professional mental health treatment. If you're experiencing a mental health emergency, please contact a crisis helpline or emergency services immediately.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
