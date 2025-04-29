import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'therapykin';
  timestamp: Date;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m TherapyKin, your AI therapeutic companion. How are you feeling today?',
      sender: 'therapykin',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I understand how you're feeling. Would you like to explore that further?",
        "Thank you for sharing that with me. How long have you been feeling this way?",
        "That sounds challenging. What strategies have helped you cope with similar situations in the past?",
        "I'm here to support you. Would it help to talk about what might be contributing to these feelings?",
        "I appreciate you opening up. Let's work through this together."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'therapykin',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">TherapyKin Chat</ThemedText>
      </ThemedView>
      
      <ScrollView style={styles.messagesContainer}>
        {messages.map((message) => (
          <ThemedView
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userMessage : styles.aiMessage,
            ]}>
            <ThemedText>{message.text}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
      
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
          placeholderTextColor="#888"
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <IconSymbol name="arrow.up.circle.fill" size={36} color="#00c5bc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.voiceButton}>
          <IconSymbol name="mic.fill" size={24} color="#00c5bc" />
        </TouchableOpacity>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginBottom: 8,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#00c5bc',
    backgroundImage: 'linear-gradient(to right, #00c5bc, #4fffee)',
    shadowColor: 'rgba(0, 197, 188, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f5f9',
    backgroundImage: 'linear-gradient(to right, #f1f5f9, #ffffff)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    maxHeight: 100,
  },
  sendButton: {
    marginLeft: 10,
  },
  voiceButton: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
