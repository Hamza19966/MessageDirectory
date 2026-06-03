import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Message } from '../types';

interface Props {
  message: Message;
  accentColor: string;
  onPress: (message: Message) => void;
}

export default function MessageItem({ message, accentColor, onPress }: Props) {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  return (
    <TouchableOpacity
      onPress={() => onPress(message)}
      onPressIn={() => Animated.spring(scaleAnim, { toValue: 0.98, useNativeDriver: true }).start()}
      onPressOut={() => Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start()}
      activeOpacity={1}
    >
      <Animated.View style={[styles.row, { transform: [{ scale: scaleAnim }] }]}>
        {!message.read && <View style={[styles.unreadDot, { backgroundColor: accentColor }]} />}
        <View style={[styles.avatarCircle, { backgroundColor: accentColor + '22' }]}>
          <Text style={styles.avatarText}>{message.avatar}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.topRow}>
            <Text style={[styles.sender, !message.read && styles.senderBold]}>{message.sender}</Text>
            <Text style={styles.time}>{message.time}</Text>
          </View>
          <Text style={[styles.preview, !message.read && styles.previewBold]} numberOfLines={1}>{message.preview}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 14, backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e5ea' },
  unreadDot: { width: 8, height: 8, borderRadius: 4, marginRight: 8, flexShrink: 0 },
  avatarCircle: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginRight: 14, flexShrink: 0 },
  avatarText: { fontSize: 22 },
  content: { flex: 1 },
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 },
  sender: { fontSize: 15, color: '#1c1c1e', fontWeight: '400' },
  senderBold: { fontWeight: '700' },
  time: { fontSize: 13, color: '#8e8e93' },
  preview: { fontSize: 14, color: '#8e8e93', fontWeight: '400' },
  previewBold: { color: '#1c1c1e', fontWeight: '500' },
});
