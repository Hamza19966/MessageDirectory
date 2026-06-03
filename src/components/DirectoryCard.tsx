import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Animated } from 'react-native';
import { Directory } from '../types';

interface Props {
  directory: Directory;
  onPress: (directory: Directory) => void;
}

export default function DirectoryCard({ directory, onPress }: Props) {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const unreadCount = directory.messages.filter((m) => !m.read).length;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, { toValue: 0.94, useNativeDriver: true }).start();
  };
  const handlePressOut = () => {
    Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <TouchableOpacity onPress={() => onPress(directory)} onPressIn={handlePressIn} onPressOut={handlePressOut} activeOpacity={1}>
      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <View style={[styles.iconCircle, { backgroundColor: directory.bgColor }]}>
          <Text style={styles.iconText}>{directory.icon}</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
        <Text style={styles.name}>{directory.name}</Text>
        <Text style={styles.description} numberOfLines={1}>{directory.description}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', justifyContent: 'center', padding: 16, width: '100%' },
  iconCircle: { width: 80, height: 80, borderRadius: 40, alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  iconText: { fontSize: 34 },
  badge: { position: 'absolute', top: 2, right: 2, backgroundColor: '#FF3B30', borderRadius: 10, minWidth: 20, height: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4, borderWidth: 2, borderColor: '#fff' },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '700' },
  name: { fontSize: 15, fontWeight: '600', color: '#1a1a2e', marginBottom: 2 },
  description: { fontSize: 11, color: '#8e8e93', textAlign: 'center' },
});
