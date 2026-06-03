import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Message } from '../types';

interface Props {
  message: Message | null;
  accentColor: string;
  visible: boolean;
  onClose: () => void;
}

export default function MessageDetailModal({ message, accentColor, visible, onClose }: Props) {
  if (!message) return null;

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <View style={[styles.avatarCircle, { backgroundColor: accentColor + '22' }]}>
              <Text style={styles.avatarText}>{message.avatar}</Text>
            </View>
            <View style={styles.headerText}>
              <Text style={styles.sender}>{message.sender}</Text>
              <Text style={styles.time}>{message.time}</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.divider, { backgroundColor: accentColor }]} />
          <ScrollView style={styles.bodyScroll}>
            <Text style={styles.body}>{message.body}</Text>
          </ScrollView>
          <TouchableOpacity style={[styles.replyBtn, { backgroundColor: accentColor }]} onPress={onClose}>
            <Text style={styles.replyText}>Reply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' },
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)' },
  sheet: { backgroundColor: '#fff', borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingBottom: 36, maxHeight: '65%' },
  handle: { width: 40, height: 4, borderRadius: 2, backgroundColor: '#e0e0e0', alignSelf: 'center', marginTop: 12, marginBottom: 16 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginBottom: 12 },
  avatarCircle: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  avatarText: { fontSize: 20 },
  headerText: { flex: 1 },
  sender: { fontSize: 16, fontWeight: '700', color: '#1c1c1e' },
  time: { fontSize: 13, color: '#8e8e93', marginTop: 1 },
  closeBtn: { padding: 8 },
  closeText: { fontSize: 16, color: '#8e8e93' },
  divider: { height: 3, borderRadius: 2, marginHorizontal: 20, marginBottom: 16, opacity: 0.7 },
  bodyScroll: { paddingHorizontal: 20, marginBottom: 16 },
  body: { fontSize: 16, color: '#3a3a3c', lineHeight: 26 },
  replyBtn: { marginHorizontal: 20, marginTop: 16, paddingVertical: 14, borderRadius: 14, alignItems: 'center' },
  replyText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
