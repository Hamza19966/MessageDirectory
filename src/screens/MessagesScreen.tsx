import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Message } from '../types';
import MessageItem from '../components/MessageItem';
import MessageDetailModal from '../components/MessageDetailModal';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Messages'>;
  route: RouteProp<RootStackParamList, 'Messages'>;
};

export default function MessagesScreen({ navigation, route }: Props) {
  const { directory } = route.params;
  const [messages, setMessages] = useState(directory.messages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMessagePress = (message: Message) => {
    setSelectedMessage(message);
    setModalVisible(true);
    setMessages((prev) => prev.map((m) => (m.id === message.id ? { ...m, read: true } : m)));
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: directory.color }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerIcon}>{directory.icon}</Text>
          <Text style={styles.headerTitle}>{directory.name}</Text>
        </View>
        <View style={styles.headerRight}>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>{messages.length} messages · {unreadCount} unread</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageItem message={item} accentColor={directory.color} onPress={handleMessagePress} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <MessageDetailModal
        message={selectedMessage}
        accentColor={directory.color}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f7' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  backBtn: { paddingVertical: 4, paddingRight: 12, flex: 1 },
  backText: { color: '#fff', fontSize: 15, fontWeight: '600' },
  headerCenter: { alignItems: 'center', flex: 2 },
  headerIcon: { fontSize: 22, marginBottom: 2 },
  headerTitle: { fontSize: 17, fontWeight: '800', color: '#fff' },
  headerRight: { flex: 1, alignItems: 'flex-end' },
  unreadBadge: { backgroundColor: 'rgba(255,255,255,0.3)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  unreadBadgeText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  subHeader: { paddingHorizontal: 20, paddingVertical: 10 },
  subHeaderText: { fontSize: 13, color: '#8e8e93', fontWeight: '500' },
  list: { paddingBottom: 30, backgroundColor: '#fff', borderRadius: 16, marginHorizontal: 12, overflow: 'hidden' },
});
