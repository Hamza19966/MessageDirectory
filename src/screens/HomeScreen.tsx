import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, Directory } from '../types';
import { directories } from '../data/directories';
import DirectoryCard from '../components/DirectoryCard';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
  const handlePress = (directory: Directory) => {
    navigation.navigate('Messages', { directory });
  };

  const totalUnread = directories.reduce(
    (sum, d) => sum + d.messages.filter((m) => !m.read).length, 0
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.title}>Messages</Text>
        </View>
        {totalUnread > 0 && (
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>{totalUnread} unread</Text>
          </View>
        )}
      </View>
      <View style={styles.searchBar}>
        <Text style={styles.searchPlaceholder}>Search directories...</Text>
      </View>
      <FlatList
        data={directories}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <DirectoryCard directory={item} onPress={handlePress} />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f7' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 22, paddingTop: 20, paddingBottom: 16, backgroundColor: '#1a1a2e', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  greeting: { fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 2 },
  title: { fontSize: 30, fontWeight: '800', color: '#ffffff', letterSpacing: -0.5 },
  totalBadge: { backgroundColor: '#FF6B35', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, marginBottom: 4 },
  totalBadgeText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', marginHorizontal: 20, marginVertical: 14, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 14 },
  searchPlaceholder: { fontSize: 15, color: '#c7c7cc' },
  grid: { paddingHorizontal: 12, paddingBottom: 30 },
  cardWrapper: { flex: 1, margin: 8, backgroundColor: '#fff', borderRadius: 22 },
});
